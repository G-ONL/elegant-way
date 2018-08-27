from flask import Flask, render_template, request,make_response
from pymongo import MongoClient
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn import preprocessing
import json
app = Flask(__name__)

#db읽기
def read_collection(name):
    client = MongoClient("mongodb://localhost:27017/")
    db = client.road
    collection = db[name]
    data=collection.find()
    client.close()
    return data


stat = pd.DataFrame(list((read_collection('statistics'))))
stat.drop(columns="_id",inplace=True)

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


#안에 정보가 하나라도 없으면 마커에 넣지 않는다
def appendToMarkers(markerArray, marker):
    if marker['title'] and marker['infobox'] and marker['lat'] and marker['lng'] and marker['icon']:
        marker['title'] = str(marker['title'])
        marker['infobox'] = str(marker['infobox'])
        markerArray.append(marker)
    else:
        return ''

@app.before_first_request
@app.route('/')
def map():
    mark=[]

    # 스쿨존어린이교통사고다발구역
    for i in read_collection('schoolZone'):
        m = {'title': 'schoolZone', 'infobox': i['info'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/schoolZone.png'}
        appendToMarkers(mark, m)

    # 공사현장
    for i in read_collection('construction'):
        m = {'title': 'construction', 'infobox': i['사업명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/construction.png'}
        appendToMarkers(mark, m)

    # 어린이보행자사고
    for i in read_collection('childPedestrianAccident'):
        m = {'title': 'childPedestrianAccident', 'infobox': i['다발지명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/childPedestrianAccident.png'}
        appendToMarkers(mark, m)

    # 어린이안전구역
    for i in read_collection('childSafetyZone'):
        m = {'title': 'childSafetyZone', 'infobox': i['대상시설명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/childSafetyZone.png'}
        appendToMarkers(mark, m)

    # 소방서
    for i in read_collection('fireStation'):
        m = {'title': 'fireStation', 'infobox': i['소방서'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/fireStation.png'}
        appendToMarkers(mark, m)

    # 119안전센터
    for i in read_collection('fireStationSafetyCenter'):
        m = {'title': 'fireStationSafetyCenter', 'infobox': i['119안전센터명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/fireStationSafetyCenter.png'}
        appendToMarkers(mark, m)

    # 경찰서
    for i in read_collection('policeOffice'):
        m = {'title': 'policeOffice', 'infobox': i['경찰서명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/policeOffice.png'}
        appendToMarkers(mark, m)

    # 유흥주점
    for i in read_collection('roomSalon'):
        m = {'title': 'roomSalon', 'infobox': i['사업장명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/roomSalon.png'}
        appendToMarkers(mark, m)

    # 서울아동안전지킴이집
    for i in read_collection('childSafetyHouse'):
        m = {'title': 'childSafetyHouse', 'infobox': i['이름'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/childSafetyHouse.png'}
        appendToMarkers(mark, m)

    # 호텔
    for i in read_collection('motel'):
        m = {'title': 'motel', 'infobox': i['사업장명'], 'lat': i['위도'], 'lng': i['경도'], 'icon': '/static/icon/motel.png'}
        appendToMarkers(mark, m)

    # 어린이놀이터
    for i in read_collection('playGround'):
        m = {'title': 'playGround', 'infobox': i['시설명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/playGround.png'}
        appendToMarkers(mark, m)

    # 초등학교
    for i in read_collection('elementarySchool'):
        m = {'title': 'elementarySchool', 'infobox': i['시설명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/elementarySchool.png'}
        appendToMarkers(mark, m)

    # 유치원
    for i in read_collection('kindergarten'):
        m = {'title': 'kindergarten', 'infobox': i['시설명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/kindergarten.png'}
        appendToMarkers(mark, m)

     # cctv
    for i in read_collection('cctv'):
        m = {'title': 'cctv', 'infobox': i['관리기관명'], 'lat': i['위도'], 'lng': i['경도'],
             'icon': '/static/icon/CCTV.png'}
        appendToMarkers(mark, m)

    return render_template('tmap.html', mark=mark)


@app.route('/index')
def index():
    return render_template('index.html')



if __name__ == '__main__':
    app.run()