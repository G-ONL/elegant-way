/*Dashboard Init*/
 
"use strict"; 

/*****E-Charts function start*****/


var traffAcc = function() {
    if( $('#e_chart_1').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['중구','용산구','종로구','성동구','마포구','금천구','서대문구','서초구','동작구','도봉구','강북구','영등포구','동대문구','강서구','광진구','강동구','강남구','성북구','구로구','관악구','양천구','송파구','중랑구','은평구','노원구']

            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [216,242,323,425,457,524,528,530,576,592,609,610,617,628,633,643,652,662,665,668,671,767,771,772,789]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var walkerAcc = function() {
    if( $('#e_chart_2').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_2'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['종로구','서초구','서대문구','성동구','용산구','마포구','관악구','중구','강남구','노원구','광진구','강북구','동대문구','금천구','도봉구','성북구','양천구','강동구','중랑구','구로구','영등포구','동작구','강서구','송파구','은평구']

            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [3,3,3,4,6,7,9,9,10,13,14,15,17,18,19,21,22,22,23,25,25,28,30,30,30]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var schoolzoneAcc = function() {
    if( $('#e_chart_3').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_3'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['강남구','용산구','영등포구','성동구','서초구','중구','마포구','강서구','광진구','금천구','서대문구','관악구','송파구','양천구','강동구','노원구','강북구','중랑구','동대문구','종로구','은평구','도봉구','동작구','구로구','성북구']


            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,3,3,4,4,7,7,9,10,14]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var workzoneAcc = function() {
    if( $('#e_chart_4').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_4'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['금천구','광진구','중랑구','용산구','도봉구','강북구','관악구','노원구','마포구','서대문구','성북구','은평구','동작구','양천구','구로구','종로구','동대문구','강동구','서초구','영등포구','강서구','성동구','중구','강남구','송파구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data:[57,63,65,67,67,70,72,79,79,81,81,83,90,94,95,100,101,103,108,114,120,121,123,127,156]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var yoohoo = function() {
    if( $('#e_chart_5').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_5'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['성북구','성동구','노원구','도봉구','양천구','서대문구','용산구','동작구','광진구','강동구','구로구','중랑구','금천구','마포구','중구','동대문구','서초구','강북구','은평구','종로구','송파구','영등포구','강서구','관악구','강남구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [33,44,70,78,79,82,89,93,101,109,125,128,129,133,141,163,180,196,217,254,261,267,296,303,507]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var danggu = function() {
    if( $('#e_chart_6').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_6'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['중구','용산구','성동구','종로구','서대문구','성북구','마포구','강북구','관악구','금천구','도봉구','동작구','노원구','중랑구','은평구','양천구','구로구','송파구','영등포구','서초구','강동구','동대문구','강서구','광진구','강남구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [16,33,78,86,86,88,104,115,135,139,139,142,152,153,161,168,169,177,189,215,223,226,235,262,454]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var motel = function() {
    if( $('#e_chart_7').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_7'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['양천구','도봉구','노원구','동작구','성동구','성북구','용산구','서초구','은평구','영등포구','금천구','마포구','서대문구','광진구','송파구','강동구','중랑구','중구','구로구','관악구','강남구','강서구','강북구','동대문구','종로구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data:[26,33,35,52,58,65,67,71,86,89,90,95,96,103,103,109,120,125,134,158,158,161,179,195,200]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var safetyzone = function() {
    if( $('#e_chart_8').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_8'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['중구','용산구','서대문구','종로구','강북구','중랑구','금천구','서초구','마포구','성동구','동작구','동대문구','구로구','관악구','도봉구','강서구','영등포구','은평구','강동구','광진구','송파구','성북구','강남구','양천구','노원구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [34,37,38,45,45,47,49,50,54,55,56,59,61,65,68,71,72,75,77,78,91,100,102,106,112]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var cctv = function() {
    if( $('#e_chart_9').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_9'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['관악구','중구','금천구','용산구','서대문구','동작구','도봉구','동대문구','강서구','마포구','서초구','강북구','중랑구','영등포구','은평구','양천구','송파구','광진구','성북구','성동구','강동구','구로구','노원구','종로구','강남구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [110,313,483,527,551,563,614,626,627,650,671,733,787,806,857,872,895,906,916,925,1123,1205,1345,1462,1756]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var police = function() {
    if( $('#e_chart_10').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_10'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['금천구','동작구','마포구','용산구','양천구','서대문구','도봉구','노원구','중랑구','강동구','구로구','광진구','관악구','성동구','강북구','은평구','강서구','성북구','송파구','영등포구','동대문구','서초구','강남구','중구','종로구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [5,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,10,10,10,10,11,11,14,15,20]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var elementary = function() {
    if( $('#e_chart_11').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_11'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['중구','강북구','금천구','종로구','관악구','용산구','동작구','동대문구','서대문구','서초구','중랑구','강동구','도봉구','광진구','영등포구','성동구','마포구','구로구','은평구','강남구','양천구','성북구','송파구','강서구','노원구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [11,17,17,18,18,18,19,20,20,20,21,22,24,25,25,25,27,29,29,29,31,31,35,36,43]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var yoochi = function() {
    if( $('#e_chart_12').length > 0 ) {
            var eChart_1 = echarts.init(document.getElementById('e_chart_12'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['강북구','종로구','금천구','중구','용산구','광진구','서대문구','성동구','서초구','동대문구','중랑구','동작구','마포구','강동구','도봉구','구로구','영등포구','관악구','은평구','강남구','양천구','송파구','강서구','노원구','성북구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [11,12,12,12,13,13,13,16,18,18,20,20,21,21,21,22,25,26,30,30,32,33,40,41,43]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var childrenhouse = function() {
    if( $('#e_chart_13').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_13'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['강북구','동대문구','중구','노원구','서대문구','강서구','광진구','양천구','관악구','금천구','강동구','용산구','성동구','동작구','중랑구','종로구','도봉구','마포구','서초구','은평구','성북구','송파구','구로구','강남구','영등포구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data:[22,24,25,27,29,30,30,33,33,33,35,36,38,42,42,43,44,46,47,49,50,50,61,61,62]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var playplace = function() {
    if( $('#e_chart_14').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_14'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['종로구','중구','용산구','금천구','광진구','강북구','서대문구','관악구','동작구','도봉구','동대문구','중랑구','강동구','은평구','영등포구','마포구','성동구','성북구','구로구','서초구','양천구','송파구','강서구','강남구','노원구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data: [64,96,139,141,160,164,222,235,241,247,258,259,277,277,282,308,309,314,321,397,439,467,486,512,595]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var bokjiplace = function() {
    if( $('#e_chart_15').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_15'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data:['종로구','노원구','도봉구','서초구','중구','강동구','광진구','금천구','성동구','중랑구','용산구','서대문구','은평구','영등포구','강남구','구로구','동대문구','강북구','동작구','마포구','강서구','성북구','양천구','송파구','관악구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data:[0,2,2,2,2,3,3,3,3,4,5,5,6,6,6,6,7,7,7,7,10,12,12,13,16]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};

var safetyguard = function() {
    if( $('#e_chart_16').length > 0 ) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_16'));
        var option1 = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            color: ['#ff6028'],
            grid: {
                top: 60,
                left: 70,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    show: false
                },
                data: ['종로구','서대문구','중구','용산구','송파구','마포구','강동구','금천구','동대문구','은평구','성동구','도봉구','관악구','구로구','중랑구','동작구','강북구','양천구','광진구','영등포구','노원구','강남구','서초구','성북구','강서구']
            },
            series: [{
                name: 'emp',
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#682d19'
                        },
                        position: 'left',
                        show: false,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff6028',
                    }
                },
                data:[22,22,28,35,35,37,38,41,42,47,51,55,56,63,64,64,65,69,71,75,76,83,85,95,108]
            }]
        };
        eChart_1.setOption(option1);
        eChart_1.resize();
    }
};
/*****E-Charts function end*****/

/*****Resize function start*****/
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(a);
	clearTimeout(b);
	clearTimeout(c);
	clearTimeout(d);
	clearTimeout(e);
	clearTimeout(f);
	clearTimeout(h);
	clearTimeout(i);
	clearTimeout(j);
	clearTimeout(k);
	clearTimeout(l);
	clearTimeout(m);
	clearTimeout(n);
	clearTimeout(o);
	clearTimeout(p);
	a = setTimeout(traffAcc, 200);
	b = setTimeout(walkerAcc, 200);
	c = setTimeout(schoolzoneAcc, 200);
	d = setTimeout(workzoneAcc, 200);
	e = setTimeout(yoohoo, 200);
    f = setTimeout(danggu, 200);
    g = setTimeout(motel, 200);
    h = setTimeout(safetyzone, 200);
    i = setTimeout(cctv, 200);
    j = setTimeout(police, 200);
    k = setTimeout(elementary, 200);
    l = setTimeout(yoochi, 200);
    m = setTimeout(childrenhouse, 200);
    n = setTimeout(playplace, 200);
    o = setTimeout(bokjiplace, 200);
    p = setTimeout(safetyguard, 200);
}).resize();
/*****Resize function end*****/

/*****Function Call start*****/

traffAcc();
walkerAcc();
schoolzoneAcc();
workzoneAcc();
yoohoo();
danggu();
motel();
safetyzone();
cctv();
police();
elementary();
yoochi();
childrenhouse();
playplace();
bokjiplace();
safetyguard();

/*****Function Call end*****/