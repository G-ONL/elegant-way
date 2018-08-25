from flask import Flask, render_template
import pandas as pd

data = pd.read_csv("cctv1.csv",encoding="utf-8")
title = data['법정동']
lat = data['위도']
lon = data['경도']
titleList=[]
latList=[]
lonList=[]
for i in data['위도']:
    latList.append(i)
for i in data['경도']:
    lonList.append(i)



app = Flask(__name__)

@app.before_first_request
@app.route('/')
def hello_world():
    return render_template('google-map.html',lat=latList,lon=lonList)

@app.route('/map')
def map():
    return render_template('google-map.html')

@app.route('/chart_js')
def chart_js():
    return render_template('chart.js.html')

@app.route('/chartist')
def chartist():
    return render_template('chartist.html')

@app.route('/charts')
def charts():
    return render_template('chats.html')

@app.route('/easy_pie_chart')
def easy_pie_chart():
    return render_template('easy-pie-chart.html')

@app.route('/echart')
def echart():
    return render_template('echart.html')

@app.route('/flot_chart')
def flot_chart():
    return render_template('flot-chart.html')

@app.route('/morris_chart')
def morris_chart():
    return render_template('morris-chart.html')

@app.route('/peity_chart')
def peity_chart():
    return render_template('peity-chart.html')

@app.route('/sparkline')
def sparkline():
    return render_template('sparkline.html')

@app.route('/e-commerce')
def e_commerce():
    return render_template('e-commerce.html')


if __name__ == '__main__':
    app.run()