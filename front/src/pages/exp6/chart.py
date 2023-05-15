import random
from fastapi import Request
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi import routing

router = routing.APIRouter()


@router.get("/")
async def chart(request: Request):
    # 生成数据
    labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    data = [random.randint(1, 10) for _ in range(len(labels))]

    # 创建Chart.js图表
    chart_html = """
        <canvas id="myChart"></canvas>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: %s,
                    datasets: [{
                        label: '# of Votes',
                        data: %s,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        </script>
    """ % (labels, data)

    # 将图表HTML嵌入到返回的HTML页面中
    html_content = """
        <html>
        <head>
            <title>Chart.js Example</title>
        </head>
        <body>
            <h1>Chart.js Example</h1>
            <div>%s</div>
        </body>
        </html>
    """ % chart_html

    return HTMLResponse(content=html_content)
