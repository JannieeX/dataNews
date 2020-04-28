
////////////////////////////////////////////////
//图表1
////////////////////////////////////////////////
var myChart = echarts.init(document.getElementById('chart1'));
var app = {};
option = null;
myChart.showLoading();
var data = {
    "name": "平台分类",
    "children": [
        {
            "name": "综合类",
            "children": [
                {
                     "name": "纯线上模式",
                     "children": [
                     // {"name": "微医",symbol:'circle',itemStyle:{color:"#5b90c5"}},
                      {"name": "微医"},
                      {"name": "有问必答"},
                      {"name": "好大夫在线"},
                      {"name": "寻医问药"},
                      //{"name": "寻医问药",symbol:'circle',itemStyle:{color:"#5b90c5"}},
                      {"name": "……"}
                     ]
                },
                {
                    "name": "线上线下结合模式",
                    "children": [
                      {"name": "轻模式",
                      "children": [
                        {"name": "春雨医生"},
                        {"name": "……"}
                            ]
                        },
                      {"name": "重模式", 
                         "children": [
                        {"name": "平安好医生"},
                        {"name": "……"}
                            ]
                      },
                     ]
                }
            ]
        },
        {
            "name": "垂直类",
            "children": [
                {"name": "中医类",
                "children": [
                        {"name": "冬日中医"},
                        {"name": "天人中医"},
                        {"name": "看中医"},
                        {"name": "……"}
                        ]
                },{"name": "科室垂直类",
                "children": [
                        {"name": "爱牙"},
                        {"name": "男性私人医生"},
                        {"name": "康大预诊"},
                        {"name": "皮大夫"},
                        {"name": "……"}
                        ]
                }
                
           ]
        },{
            "name": "医院自建",
        }
    ]
};
myChart.hideLoading();
myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series:
        {
            type: 'tree',
            name: '本稿数据来源平台',
            data: [data],
            top: '0%',
            left: '20%',
            bottom: '2%',
            right: '25%',
            symbolSize: 10,
            initialTreeDepth:-1,
            edgeForkPosition:'50%',
            itemStyle:{
                borderColor :'#5b90c5',
                borderWidth :2
            },
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize:13
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        }
        
});

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
////////////////////////////////////////////////
//图表2
////////////////////////////////////////////////
var myChart = echarts.init(document.getElementById('chart2'));
var option = {
    tooltip:{
        trigger: 'item',
        triggerOn: 'mousemove',
        showContent: true,
        formatter:"级别：{b}<br>数量：{c}家"
    },
    series: [{
        name: '',
        type: 'treemap',
        top:"5%",
        left:0,
        bottom:"2%",
        roam :false,

        breadcrumb:{
            left:"0%",
            top:"2%",
            itemStyle:{
               color:"#ffffff",
                borderColor:"#cfd0d0",
                borderWidth:1,
                shadowColor:"#ffffff",
                textStyle:{
                    color:"#555555"
                }
           } 
        },
        label: {
            show: true,
            color:"#ffffff",
            fontSize:15,
            fontWeight:'bold',
            formatter:"{c}",
            ellipsis : true
            
        },
        upperLabel: {
            show: true,
            height: 20,
            color:"#494949",
            fontSize:14,
        },
        data: [ 
                {
            name: '政府数据',      // First tree
            value: 25087,
            itemStyle: {
                borderWidth: 5,
                gapWidth: 2,
            },
           
            children: [
                {
                name:'三级医院',       // First leaf of first tree
                value: 2762,
                id:'三级医院',
                itemStyle: {
                    //color:"#acc7e2"
                    color:"#85aad4"
                },
                label: {fontSize:10}
            }, {
                name: '三甲医院',       // Second leaf of first tree
                value: 1442,
                id:'三甲医院',
                label: {fontSize:10},
                itemStyle: {
                    //color:"#d1e5f1"
                    color:"#5b90c5"
                }
                    },{
                name: '二级医院',   // Second leaf of first tree
                value: 9730,
                id:'二级医院', 
                itemStyle: {
                    //color:"#85aad4"
                    color:"#acc7e2"
                }
            },{
                name:'一级医院',       // Second leaf of first tree
                value: 11153,
                id:'一级医院', 
                itemStyle: {
                    //color:"#5b90c5"
                    color:"#d1e5f1"
                }
            }]
        }, {
            name: '预估数据',            // Second tree
            value: 25699,
            itemStyle: {
                borderWidth: 5,
                gapWidth: 2
            },
            children: [{
                name:'三甲医院',       // Son of first tree
                value: 1694,
                id: '三甲医院',
                label: {fontSize:13},
                itemStyle: {
                    //color:"#d1e5f1"
                    color:"#5b90c5"

                }
            },{
                name: '三级医院',       // Son of first tree
                value: 2861,
                id:'三级医院',
                itemStyle: {
                    //color:"#acc7e2"
                    color:"#85aad4"

                }
            },{
                name: '二级医院',       // Son of first tree
                value: 9898,
                id:'二级医院',
                itemStyle: {
                    //color:"#85aad4"
                    color:"#acc7e2"

                }
            },{
                name: '一级医院',       // Son of first tree
                value: 11246,
                id:'一级医院',
                itemStyle: {
                    //color:"#5b90c5"
                    color:"#d1e5f1"
                }
            }]
        },{
            name: '微医数据（医院/所）',            // Second tree
            value: 38678,
            itemStyle: {
                borderWidth: 5,
                gapWidth: 2
            },
            children: [{
                name:'三甲医院',       // Son of first tree
                value: 2472,
                id: '三甲医院',
                itemStyle: {
                   // color:"#d1e5f1"
                   color:"#5b90c5"

                }
            },{
                name: '三级医院',       // Son of first tree
                value: 3646,
                id:'三级医院',
                itemStyle: {
                   // color:"#acc7e2"
                   color:"#85aad4"

                }
            },{
                name: '二级医院',       // Son of first tree
                value: 11803,
                id:'二级医院',
                itemStyle: {
                    //color:"#85aad4"
                    color:"#acc7e2"

                }
            },{
                name: '一级医院',       // Son of first tree
                value: 14589,
                id:'一级医院',
                itemStyle: {
                    //color:"#5b90c5"
                    color:"#d1e5f1"
                }
            }]
        },{
            name: '寻医问药数据',            // Second tree
            value: 8631,
            itemStyle: {
                borderWidth: 5,
                gapWidth: 2
            },
            children: [{
                name: '三甲医院',       // Son of first tree
                value: 1841,
                id: '三甲医院',
                label: {fontSize:10},
                itemStyle: {
                    //color:"#d1e5f1"
                    color:"#5b90c5"

                }
            },{
                name: '三级医院',       // Son of first tree
                value: 2718,
                id:'三级医院',
                label: {fontSize:7},
                itemStyle: {
                    //color:"#acc7e2"
                    color:"#85aad4"

                }
            },{
                name: '二级医院',       // Son of first tree
                value: 3679,
                id:'二级医院',
                label: {fontSize:10},
                itemStyle: {
                    //color:"#85aad4"
                    color:"#acc7e2"

                }
            },{
                name: '一级医院',       // Son of first tree
                value: 393,
                id:'一级医院',
                label: {fontSize:7},
                itemStyle: {
                    //color:"#5b90c5"
                    color:"#d1e5f1"
                }
            }]
        }]
    }]
};
myChart.setOption(option);

////////////////////////////////////////////////
//图表3 问诊流程
////////////////////////////////////////////////
var dom = document.getElementById("chart8");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = {
    "name": "在线问诊",
    "children": [
        {
            "name": "预约挂号",
            "children": [
                { "name": "线下就诊",label:{backgroundColor :'#9b8eb9'}},
            ]
        },
        {
            "name": "在线诊疗",
            "children": [
                {"name": "初诊病人",
                    "children": [
                         { "name": "给予建议",
                         "children": [{ "name": "患者实体机构就诊",label:{distance:-12,backgroundColor :'#9b8eb9'},},]
                        },
                    ]
            },
                {"name": "复诊病人",
                "children": [
                         { "name": "复诊",
                         "children": [
                             { "name": "诊断不变",label:{distance:-15},
                            "children": [{ "name": "开具处方附电子签名",label:{distance:-15},
                                 "children": [{ "name": "药师审核",
                                    "children": [{ "name": "委托第三方机构配送",label:{distance:-15}},]
                                },
                                 
                                ]}]
                            }
                             ,{ "name": "病情变化",label:{backgroundColor :'#9b8eb9'},
                             "children": [{ "name": "需要医务人员亲自检查",label:{distance:15,backgroundColor :'#9b8eb9'},
                                 "children": [{ "name": "诊疗终止",label:{backgroundColor :'#9b8eb9'},
                                    "children": [{ "name": "引导患者实体机构就诊",label:{distance:11,backgroundColor :'#9b8eb9'}},]
                                },
                                ]}]
                            },]
                        },
                    ]
            }
            ]
        },
        {
            "name": "在线咨询",
            "children": [
                {"name": "给予意见"}
            ]
        }
    ]
};

var option = {
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',

                data: [data],

                left: '0%',
                right: '4%',
                top: '8%',
                bottom: '8%',
                symbolSize: 0.1,
                initialTreeDepth:-1,
                itemStyle:{
                borderColor :'#5b90c5',
                borderWidth :2
                },
                symbol: 'emptyCircle',
                edgeShape: 'polyline',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    distance:-5,
                    //rotate: -90,
                    verticalAlign: 'middle',
                    align: 'middle',
                    fontSize: 13,
                    color:"#ffffff",
                    backgroundColor :'#5b90c5',
                    padding: [4, 5],
                    borderRadius:5

                },

                leaves: {
                    label: {
                        position: 'bottom',
                        //rotate: -90,
                        verticalAlign: 'middle',
                        align: 'middle'
                    }
                },
                animationDurationUpdate: 750
}]};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}