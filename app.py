from flask import Flask, render_template
from pymongo import MongoClient


app = Flask(__name__)

#db읽기
def read_collection(name):
    client = MongoClient("mongodb://localhost:27017/")
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

    # 어린이보호시설
    # for i in read_collection(''):
    #     m = {'title': 'cctv', 'infobox': i['관리기관명'], 'lat': i['위도'], 'lng': i['경도'],
    #          'icon': '/static/icon/CCTV.png' }
    #     appendToMarkers(mark, m)

    return render_template('tmap.html', mark=mark)


if __name__ == '__main__':
    app.run()