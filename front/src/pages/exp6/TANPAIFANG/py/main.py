from datetime import datetime
from flask import Request

import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.sql import text

import chart as router_chart

# 创建引擎和会话
username: str = 'postgres'
password: str = '1230'
host: str = '119.3.154.46'
port: str = '5432'
database: str = 'postgres'
engine = create_engine(f'postgresql://{username}:{password}@{host}:{port}/{database}')
Session = sessionmaker(bind=engine)

# 声明基类
Base = declarative_base()


# 定义模型

# 实验表
class Experiment(Base):
    __tablename__ = 'experiments'
    id: Column = Column(Integer, primary_key=True, autoincrement=True)  # 主键 实验id
    name: Column = Column(String(50), nullable=False)  # 实验名称
    create_time: Column = Column(DateTime, default=datetime.now)  # 创建时间
    duration: Column = Column(Integer, nullable=False)  # 实验时长, 单位为分钟
    expire_time: Column = Column(DateTime, nullable=False)  # 实验过期时间
    status: Column = Column(Integer, nullable=False)  # 实验状态 0:进行中 1:已结束, 这个值只能由教师修改

    def __repr__(self) -> str:
        return f'<Experiment {self.id} {self.name}>'

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'create_time': self.create_time,
            'duration': self.duration,
            'expire_time': self.expire_time,
            'status': self.status
        }

    def to_dict_with_status(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'create_time': self.create_time,
            'duration': self.duration,
            'expire_time': self.expire_time,
            'status': self.status,
            'status_str': '进行中' if self.status == 0 else '已结束'
        }


# 出价表
class Bid(Base):
    __tablename__ = 'bids'
    id: Column = Column(Integer, primary_key=True, autoincrement=True, comment='出价id')  # 主键 出价id
    experiment_id: Column = Column(Integer, nullable=False, comment='实验id')  # 实验id
    student_id: Column = Column(Integer, nullable=False, comment='学生id')  # 学生id
    price: Column = Column(Integer, nullable=False, comment='出价')  # 出价
    buy_or_sell: Column = Column(Integer, nullable=False, comment='买卖方向, 0为买, 1为卖')  # 买卖方向 0:买 1:卖
    create_time: Column = Column(DateTime, default=datetime.now, comment='出价时间')  # 出价时间

    def __repr__(self) -> str:
        return f'<Bid {self.id} {self.experiment_id} {self.student_id} {self.price} {self.buy_or_sell}>'

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'experiment_id': self.experiment_id,
            'student_id': self.student_id,
            'price': self.price,
            'buy_or_sell': self.buy_or_sell,
            'create_time': self.create_time
        }


# 创建app
app: FastAPI = FastAPI()

# 注册路由
app.include_router(router_chart.router, prefix='/chart', tags=['chart'])

# CORS 允许所有域名访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


# 定义根路由
class CheckConnectionResponse(BaseModel):
    message: str

    class Config:
        schema_extra = {
            "example": {
                "message": "Database connected successfully!"
            }
        }


@app.get('/', response_model=CheckConnectionResponse)
def index() -> dict:
    """
    Check database connection.

    Returns:
        A dictionary with the message "Database connected successfully!"
    """
    try:
        session: Session = Session()
        session.execute(text('SELECT 1'))
        session.close()
        return {"message": "Database connected successfully!"}
    except OperationalError as e:
        return {"message": f"Database connection error!\n{str(e)}"}


@app.get('/experiments')
def get_experiments():
    # 获取所有实验
    session = Session()
    experiments = session.query(Experiment).all()
    session.close()
    return {'experiments': [experiment.to_dict_with_status() for experiment in experiments]}


@app.get('/experiments/{experiment_id}')
def get_experiment(experiment_id: int):
    # 获取指定id的实验
    session = Session()
    experiment = session.query(Experiment).filter(Experiment.id == experiment_id, ).first()
    session.close()
    if experiment is None:
        return {'error': 'Experiment not found!'}
    return {'experiment': experiment.to_dict_with_status()}


@app.get('/experiments/{experiment_id}/bids')
def get_bids(experiment_id: int):
    # 获取指定id的实验的所有出价
    session = Session()
    bids = session.query(Bid).filter(Bid.experiment_id == experiment_id).all()
    session.close()
    return {'bids': [bid.to_dict() for bid in bids]}


@app.get('/experiments/{experiment_id}/result')
# 计算某一次实验的结果
def calculate_result(experiment_id: int):
    # 获取指定id的实验
    session = Session()
    experiment = session.query(Experiment).filter(Experiment.id == experiment_id).first()
    # 判断实验是否存在
    if experiment is None:
        return {'error': 'Experiment not found!'}
    # 获取实验的所有出价
    bids = session.query(Bid).filter(Bid.experiment_id == experiment_id).all()
    session.close()
    # 判断出价是否为空
    if len(bids) == 0:
        return {'error': 'No bids!'}

    # 将出价的买卖方向分开，存储在panadas的DataFrame中
    df = pd.DataFrame([bid.to_dict() for bid in bids])
    df_buy = df[df['buy_or_sell'] == 0]
    df_sell = df[df['buy_or_sell'] == 1]

    # 处理数据
    # 将买方的出价按照出价从高到低排序
    # 统计每一个出价的人数，以及大于等于该出价的人数
    # 将出价乘上累计人数
    # 例如: [1,1,2,2,3]
    # 返回值如下:
    #  出价 人数 大于等于该出价的人数 乘积
    #  3   1   1                 3
    #  2   2   3                 6
    #  1   2   5                 5
    df_buy.sort_values(by='price', ascending=False, inplace=True)  # 根据出价降序排列
    df_buy['count'] = 1  # 新增一列count，用于统计人数
    df_buy['cum_count'] = df_buy['count'].cumsum()  # 计算累计人数
    df_buy['cum_price'] = df_buy['price'] * df_buy['cum_count']  # 计算乘积
    df_buy_stats = df_buy.groupby(['price'], as_index=False).agg(
        {'count': 'sum', 'cum_count': 'max', 'cum_price': 'max'})

    # 将卖方的出价按照出价从低到高排序
    # 统计每一个出价的人数，以及小于等于该出价的人数
    # 例如: [1,1,2,2,3]
    # 返回值如下:
    #  出价 人数 小于等于该出价的人数
    #  1   2   2
    #  2   2   4
    #  3   1   5
    df_sell.sort_values(by='price', inplace=True)  # 根据出价升序排列
    df_sell['count'] = 1  # 新增一列count，用于统计人数
    df_sell['cum_count'] = df_sell['count'].cumsum()  # 计算累计人数
    df_sell_stats = df_sell.groupby(['price'], as_index=False).agg(
        {'count': 'sum', 'cum_count': 'max'})  # 只需计算小于等于该出价的人数

    # 返回数据
    return {
        'experiment': experiment.to_dict_with_status(),
        'buy': df_buy_stats.to_dict(orient='records'),
        'sell': df_sell_stats.to_dict(orient='records')
    }


# 定义输入模型
class BidInput(BaseModel):
    student_id: int
    buyer_price: int
    seller_price: int


@app.post('/experiments/{experiment_id}/bids')
def post_bid(experiment_id: int, bid_input: BidInput):
    # 获取指定id的实验
    session = Session()
    experiment = session.query(Experiment).filter(Experiment.id == experiment_id).first()
    # 判断实验是否存在
    if experiment is None:
        session.close()
        return {'error': 'Experiment not found!'}

    # 创建一个新的买方出价
    new_bid_buy = Bid(experiment_id=experiment_id, student_id=bid_input.student_id, price=bid_input.buyer_price,
                      buy_or_sell=0)
    session.add(new_bid_buy)

    # 创建一个新的卖方出价
    new_bid_sell = Bid(experiment_id=experiment_id, student_id=bid_input.student_id, price=bid_input.seller_price,
                       buy_or_sell=1)
    session.add(new_bid_sell)

    session.commit()
    session.close()

    # 返回一个响应
    return {'message': 'Bid submitted successfully'}


# 加入对在线用户的统计
online_users = []

@app.middleware("http")
async def add_user_to_online_list(request: Request, call_next):
    response = await call_next(request)
    forwarded_for = request.headers.get('X-Forwarded-For')
    if forwarded_for:
        # 如果 X-Forwarded-For 存在，则将其作为客户端的真实 IP 地址
        client_ip = forwarded_for.split(',')[0]
    else:
        # 否则使用 request.client.host 获取 IP 地址
        client_ip = request.client.host
    online_users.append(client_ip)
    return response


@app.get("/online-count")
async def get_online_count():
    count = len(set(online_users))
    return {"count": count}

@app.get("/online-users")
async def get_online_users():
    return {"online_users": list(set(online_users))}

# 定义custom_openapi
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Custom title",
        version="2.5.0",
        description="This is a very custom OpenAPI schema",
        routes=app.routes,
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi
