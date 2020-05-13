var introduction1 = echarts.init(document.getElementById('introduction1'));
option = {
        xAxis: {
            type: 'category',
            data: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5', 'Lab6', 'Lab7','Lab8','Lab9', 'Lab10',
            'Studio1', 'Studio2', 'Studio3', 'Studio4']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [112,75,69,101,96,89,103,101,108,34,45,17,13,25],
            type: 'line',
            smooth: true
        }]
    };
introduction1.setOption(option);

var interests1 = echarts.init(document.getElementById('interests1'))
setTimeout(function () {

option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: [
            ['product', 'Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab6', 'Lab7','Lab8','Lab9', 'Lab10'],
            ['Creative Informatics', 58,30,27,19,33,38,19,19,16],
            ['Available Opportunities', 49,26,24,27,34,21,17,22,17],
            ['Networking', 57,41,33,39,37,43,33,40,24],
            ['Data-Driven Technology', 56,28,29,29,36,37,14,29,18]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            start: 30,
            end: 80
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            start: 30,
            end: 80
        }
    ],
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@1} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: 'Lab1',
                tooltip: 'Lab1'
            }
        }
    ]
};

interests1.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        interests1.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});

interests1.setOption(option);

});



var gender1 = echarts.init(document.getElementById('gender1'));
option = {
    title: {
        text: 'Gender Distribution',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Male', 'Female', 'Other']
    },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 249, name: 'Male'},
                {value: 262, name: 'Female'},
                {value: 5, name: 'Other'}

            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
gender1.setOption(option);    

var age1 = echarts.init(document.getElementById('age1'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab6', 'Lab7', 'Lab8', 'Lab9','Lab10']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '18-24',
            type: 'bar',
            data: [1,2,2,6,10,5,7,6,2]
        },
        {
            name: '25-34',
            type: 'bar',
            stack: '广告',
            data: [20,15,13,11,11,34,14,13,6]
        },
        {
            name: '35-44',
            type: 'bar',
            stack: '广告',
            data: [27,18,14,17,9,13,11,16,10]
        },
        {
            name: '45-54',
            type: 'bar',
            stack: '广告',
            data: [18,4,14,14,15,13,8,8,6]
        },
        {
            name: '55-64',
            type: 'bar',
            data: [4,2,2,4,4,2,3,1,6],
            
        },
        {
            name: '65+',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [1,1,1,0,1,1,2,2,1]
        },
        
    ]
};
age1.setOption(option); 

var work1 = echarts.init(document.getElementById('work1'));
option = {
    title: {
        text: 'Distribution of Working Area',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'left',
        top: 'bottom',
        data: ['IT, software, video games and computer services', 'Music, performing arts, visual arts and cultural education', 'Advertising and marketing', 'Product design, graphic design and fashion design', 'Film, TV, video, radio and photography', 'Crafts', 'Museums, galleries and libraries', 'Architecture','Publishing and translation','Other']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
        }
    },
    series: [
        {
            name: 'Participants',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 147, name:'IT, software, video games and computer services'},
                {value: 188, name: 'Music, performing arts, visual arts and cultural education'},
                {value: 72, name: 'Advertising and marketing'},
                {value: 113, name: 'Product design, graphic design and fashion design'},
                {value: 78, name: 'Film, TV, video, radio and photography'},
                {value: 47, name: 'Crafts'},
                {value: 42, name: 'Museums, galleries and libraries'},
                {value: 22, name: 'Architecture'},
                {value: 12, name: 'Publishing and translation'},
                {value: 183, name: 'Other'}
            ]
        },
       
    ]
};
work1.setOption(option);