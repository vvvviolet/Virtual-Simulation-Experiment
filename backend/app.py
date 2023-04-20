from flask import Flask
app = Flask(__name__)
from flask import jsonify
from flask import request
import json
import time 
import json
import base64
import hmac
import hashlib
import time

def base64UrlEncode(source):
    return base64.urlsafe_b64encode(source).rstrip(b"=").decode()

def sign(payload, salt, expires_in, encode='utf8'):
    exp = int(time.time()) + expires_in
    header = json.dumps({"alg": "HS256", "typ": "JWT", "exp": exp})
    payload.update({"exp": exp})
    payload_str = json.dumps(payload)
    
    base64_str = (base64UrlEncode(header.encode(encode)) + '.' +
                  base64UrlEncode(payload_str.encode(encode)))
    signature = base64UrlEncode(hmac.new(
        salt.encode(encode),
        base64_str.encode(encode),
        hashlib.sha256).digest())
    
    return base64_str + '.' + signature

@app.route('/api')
def hello_world():
    return 'Hello, World!'

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    data = json.loads(request.data.decode('utf-8'))
    username = data['username']
    password = data['password']
    print(data)
    if username == 'admin' and password == '888888':
        expiresIn = 24 * 60 * 60 * 1000
        token=sign({ 'username': 'admin', 'role': 'admin' }, 'blackpanther', expiresIn )
        return jsonify({ 'code': 0, 'message': 'success', 'data': { 'token':token, 'expires': expiresIn + time.time() } })
    else:
        return jsonify({ 'code': 401, 'message': '用户名或密码错误' })


@app.route('/api/account', methods=['GET', 'POST'])
def account():
    return jsonify({
        'code': 0,
        'message': 'success',
        'data': {
        'account': {
            'username': 'Chennuo',
            'age': 18,
            'gender': 0,
            'avatar': 'http://portrait.gitee.com/uploads/avatars/user/691/2073535_Chennuo_1578965604.png!avatar30',
        },
        'role': 'admin',
        'permissions': ['edit', 'delete', 'add']
    }
    })

