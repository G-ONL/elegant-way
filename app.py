import json
import threading

from flask import Flask, render_template, request,make_response
from flask_caching import Cache
from flask_sitemap import Sitemap, sitemap_page_needed
from pymongo import MongoClient
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn import preprocessing

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})
ext = Sitemap(app=app)

mark = []


#db읽기
def read_collection(name):
    client = MongoClient("mongodb://150.95.204.252:27017/")
    db = client.road
    collection = db[name]
    data=collection.find()
    client.close()
    return data

#안에 정보가 하나라도 없으면 마커에 넣지 않는다
def appendToMarkers(markerArray, marker):
    if marker['title'] and marker['infobox'] and marker['lat'] and marker['lng'] and marker['icon']:
        marker['title'] = str(marker['title'])
        marker['infobox'] = str(marker['infobox'])
        markerArray.append(marker)
    else:
        return ''

def marking(x):
    for i in read_collection(x[0]):
        try:
            m = {'title': str(x[0]), 'infobox': i[str(x[1])], 'lat': i['위도'], 'lng': i['경도'],'icon': '/static/icon/'+x[0]+'.png'}
        except KeyError:
            print(x[0],x[1])
        appendToMarkers(mark, m)

def init():
    options = [
                ('schoolZone','info'),('construction','사업명'),
                ('childPedestrianAccident','다발지명'),('childSafetyZone','대상시설명'),
                ('fireStation','소방서'),('fireStationSafetyCenter','119안전센터명'),('roomSalon', '사업장명'),
                ('policeOffice','경찰서명'),('childSafetyHouse','이름'),('motel','사업장명'),('playGround','시설명'),
                ('elementarySchool','시설명'),('kindergarten','시설명'),('cctv','관리기관명'),
              ]

    for i in options:
        t = threading.Thread(target=marking, args=(i,))
        t.start()


init()

stat = pd.DataFrame(list((read_collection('statistics'))))
stat.drop(columns="_id",inplace=True)

cols = list(stat.columns)
col = cols[0:3] + cols[4:]
col.append(cols[3])
stat = stat[col]

lab_enc = preprocessing.LabelEncoder()
stat.iloc[:, -1] = lab_enc.fit_transform(stat.iloc[:,-1]) #자료형 바꿔주기

logi = LogisticRegression()
logi.fit(stat.iloc[:,:-1],stat.iloc[:,-1])


@app.route('/predict',methods=['GET'])
def predict():
    feacture = request.args.get('feacture')
    area = request.args.get('area')
    area = (float(area) / 1000000)
    feacture= feacture.split(',')
    feacture = [int(i)/area for i in feacture]
    result = logi.predict([feacture])
    result = str(result[0])
    resp = make_response(json.dumps(result))
    resp.status_code = 200
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/location',methods=['GET'])
def location():
    my_lon = request.args.get('my_lon')
    my_lat = request.args.get('my_lat')
    resp = make_response(json.dumps(my_lon))
    resp.status_code = 200
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/')
def index():
    return render_template('map.html', mark=mark)


@ext.register_generator
def index():
    yield 'index', {}


@app.route('/intro')
@cache.cached(50)
def intro():
    return render_template('intro.html')


@ext.register_generator
def intro():
    yield 'intro', {}


@app.route('/gis')
@cache.cached(50)
def gis():
    return render_template('polygon.html')


@ext.register_generator
def gis():
    yield 'gis', {}


@app.route('/eda')
@cache.cached(50)
def eda():
    return render_template('echart3.html')


@ext.register_generator
def eda():
    yield 'eda', {}


@app.route('/data')
@cache.cached(50)
def data():
    return render_template('data.html')


@ext.register_generator
def data():
    yield 'data', {}


@app.route('/analysis')
@cache.cached(50)
def analysis():
    return render_template('science.html')


@app.route('/model')
@cache.cached(50)
def model():
    return render_template('e.html')


@ext.register_generator
def model():
    yield 'model', {}


if __name__ == '__main__':
    app.run()