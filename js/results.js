var results1 = echarts.init(document.getElementById('results1'));
option = {
    title: {
        text: 'Participants',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Chosing networking', 'Total']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['All audience', 'People who are in CI industry','People who are not in CI industry', 'Female', 'Male']
    },
    series: [
        {
            name: 'Chosing networking',
            type: 'bar',
            data: [338, 257, 76, 158, 125]
        },
        {
            name: 'Total',
            type: 'bar',
            data: [512, 384, 123, 238, 187]
        }
    ]
};

results1.setOption(option);

var results2 = echarts.init(document.getElementById('results2'));
option = {
    title: {
        text: 'Distribution',
        subtext: 'Male and Total',
        left: 'right'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Choosing Networking', 'Others']
    },
    series: [
        {
            name: 'Total',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 338, name: 'Choosing Networking'},
                {value: 174, name: 'Others'},
            ]
        },
        {
            name: 'Male',
            type: 'pie',
            radius: ['30%', '20%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 125, name: 'Choosing Networking'},
                {value: 62, name: 'Others'},
            ]
        }
    ]
};
results2.setOption(option);

var results3 = echarts.init(document.getElementById('results3'));
option = {
    title: {
        text: 'Distribution',
        subtext: 'Female and Total',
        left: 'right'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Choosing Networking', 'Others']
    },
    series: [
        {
            name: 'Total',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 338, name: 'Choosing Networking'},
                {value: 174, name: 'Others'},
            ]
        },
        {
            name: 'Male',
            type: 'pie',
            radius: ['30%', '20%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 158, name: 'Choosing Networking'},
                {value: 80, name: 'Others'},
            ]
        }
    ]
};
results3.setOption(option);

var results4 = echarts.init(document.getElementById('results4'));
var option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Choosing Networking', 19, 98 , 93, 96],
            ['Others', 18, 41, 39, 40],
            
        ]
    },
    series: [{
        name:'18-24',
        type: 'pie',
        radius: 60,
        center: ['25%', '30%']
        // No encode specified, by default, it is '2012'.
    }, {
        name:'25-34',
        type: 'pie',
        radius: 60,
        center: ['75%', '30%'],
        encode: {
            itemName: 'product',
            value: '2013'
        }
    }, {
        name:'35-44',
        type: 'pie',
        radius: 60,
        center: ['25%', '75%'],
        encode: {
            itemName: 'product',
            value: '2014'
        }
    }, {
        name:'45+',
        type: 'pie',
        radius: 60,
        center: ['75%', '75%'],
        encode: {
            itemName: 'product',
            value: '2015'
        }
    }]
};
results4.setOption(option);

var results5 = echarts.init(document.getElementById('results5'));
var data = [ {
    name: 'Male',
    itemStyle: {
        color: '#da1d23'
    },
    children: [{
        name: 'Choosing Networking',
        itemStyle: {
            color: '#dd4c51'
        },
        children: [ {
            name: '18-24',
            value: 4,
            itemStyle: {
                color: '#3e0317'
            }
        }, {
            name: '25-34',
            value: 37,
            itemStyle: {
                color: '#e62969'
            }
        }, {
            name: '35-44',
            value: 28,
            itemStyle: {
                color: '#6569b0'
            }
        }, {
            name: '45-54',
            value: 38,
            itemStyle: {
                color: '#ef2d36'
            }
        }, {
            name: '55-64',
            value: 8,
            itemStyle: {
                color: '#b53b54'
            }
        }, {
            name: '65+',
            value: 1,
            itemStyle: {
                color: '#a5446f'
            }
        }]
    }, {
        name: 'Others',
        itemStyle: {
            color: '#c94a44'
        },
        children: [ {
            name: '18-24',
            value: 6,
            itemStyle: {
                color: '#f2684b'
            }
        }, {
            name: '25-34',
            value: 15,
            itemStyle: {
                color: '#e73451'
            }
        }, {
            name: '35-44',
            value: 15,
            itemStyle: {
                color: '#e65656'
            }
        }, {
            name: '45-54',
            value: 11,
            itemStyle: {
                color: '#f89a1c'
            }
        }, {
            name: '55-64',
            value: 1,
            itemStyle: {
                color: '#aeb92c'
            }
        }, {
            name: '65+',
            value: 2,
            itemStyle: {
                color: '#4eb849'
            }
        }]
    }]
}, {
    name: 'Female',
    itemStyle: {
        color: '#ebb40f'
    },
    children: [{
        name: 'Choosing Networking',
        itemStyle: {
            color: '#e1c315'
        },
        children: [{
            name: '18-24',
            value: 12,
            itemStyle: {
                color: '#9ea718'
            }
        }, {
            name: '25-34',
            value: 46,
            itemStyle: {
                color: '#94a76f'
            }
        }, {
            name: '35-44',
            value: 55,
            itemStyle: {
                color: '#d0b24f'
            }
        }, {
            name: '45-54',
            value: 28,
            itemStyle: {
                color: '#8eb646'
            }
        }, {
            name: '55-54',
            value: 11,
            itemStyle: {
                color: '#faef07'
            }
        }, {
            name: '65+',
            value: 4,
            itemStyle: {
                color: '#c1ba07'
            }
        }]
    }, {
        name: 'Others',
        itemStyle: {
            color: '#b09733'
        }, 
        children: [{
            name: '18-24',
            value: 11,
            itemStyle: {
                color: '#8f1c53'
            }
        }, {
            name: '25-34',
            value: 20,
            itemStyle: {
                color: '#b34039'
            }
        }, {
            name: '35-44',
            value: 19,
            itemStyle: {
                color: '#ba9232'
            }
        }, {
            name: '45-54',
            value: 16,
            itemStyle: {
                color: '#8b6439'
            }
        }, {
            name: '55-64',
            value: 3,
            itemStyle: {
                color: '#a2bb2b'
            }
        }, {
            name: '65+',
            value: 2,
            itemStyle: {
                color: '#62aa3c'
            }
        }]
    }]}
];

option = {
    title: {
        text: 'Distribution in different ages and genders',
        textStyle: {
            fontSize: 14,
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};
results5.setOption(option);