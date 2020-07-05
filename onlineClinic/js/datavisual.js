
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
            left: '12%',
            bottom: '2%',
            right: '25%',
            symbolSize: 11,
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
                fontSize:14,
                backgroundColor :'#ffffff'

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
var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['三甲医院', '三级医院', '二级医院', '一级医院'],
        left :'0%',
        selector: true
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top:'7%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show:false,
        max:'dataMax',
    },
    yAxis: {
        type: 'category',
        //data: ['政府数据', '预估数据', '微医数据', '寻医问药数据'],
        data: ['寻医问药数据','微医数据', '预估数据','政府数据'],
        id :['数据截至2020年4月1日','数据截至2020年4月1日','2020年4月底预估最大值','三甲数据截至2018年底，其他数据截至2020年2月底'],
        axisLine:{
            show:false,
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            lineHeight: 100,
            verticalAlign:"bottom",
            inside:true,
            fontSize:14,
            fontWeight:"bold"
            
        }
    },
    series: [
        {
            name: '三甲医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle:{
                color:"#5b90c5",
            
            },
            //data: [1442, 1694, 2472, 1841],
            data: [1841, 2472, 1694, 1442],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"75%"
        },
        {
            name: '三级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle:{
                color:"#85aad4"

            },
            //data: [2762, 2861, 3646, 2718],
            data: [ 2718, 3646, 2861, 2762],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"75%"

        },
        {
            name: '二级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle:{
                color:"#acc7e2"
            },
           // data: [9730,9898,11803,3679],
            data: [ 3679, 11803, 9898, 9730],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"75%"
        },
        {
            name: '一级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside',
                color:'#5b90c5'
            },
            itemStyle:{
                color:"#d1e5f1"
            },
            //data: [11153,11246,14589,3679],
            data: [393,14589,11246,11153],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"75%"
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

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

                left: '4%',
                right: '5%',
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


////////////////////////////////////////////////
//图表2 手机版
////////////////////////////////////////////////

var dom = document.getElementById("chart9");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['三甲医院', '三级医院', '二级医院', '一级医院'],
        left :'0%',
        itemWidth:8,
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top:'10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show:false,
        max:'dataMax',
    },
    yAxis: {
        type: 'category',
        //data: ['政府数据', '预估数据', '微医数据', '寻医问药数据'],
        data: ['寻医问药数据','微医数据', '预估数据','政府数据'],
        id :['数据截至2020年4月1日','数据截至2020年4月1日','2020年4月底预估最大值','三甲数据截至2018年底，其他数据截至2020年2月底'],
        axisLine:{
            show:false,
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            lineHeight: 50,
            verticalAlign:"bottom",
            inside:true,
            fontSize:14,
            fontWeight:"bold"
            
        }
    },
    series: [
        {
            name: '三甲医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside',
                fontSize:8
            },
            itemStyle:{
                color:"#5b90c5",
            
            },
            //data: [1442, 1694, 2472, 1841],
            data: [1841, 2472, 1694, 1442],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"50%",
        },
        {
            name: '三级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside',
                fontSize:8
            },
            itemStyle:{
                color:"#85aad4"

            },
            //data: [2762, 2861, 3646, 2718],
            data: [ 2718, 3646, 2861, 2762],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"50%",

        },
        {
            name: '二级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside',
                fontSize:8
            },
            itemStyle:{
                color:"#acc7e2"
            },
           // data: [9730,9898,11803,3679],
            data: [ 3679, 11803, 9898, 9730],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"50%",
        },
        {
            name: '一级医院',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside',
                color:'#5b90c5',
                fontSize:8
            },
            itemStyle:{
                color:"#d1e5f1"
            },
            //data: [11153,11246,14589,3679],
            data: [393,14589,11246,11153],
            showBackground:true,
            backgroundStyle:{
                color :"#eeeeee"
            },
            barWidth:"50%",
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

////////////////////////////////////////////////
//图表3 问诊流程
////////////////////////////////////////////////
var dom = document.getElementById("chart10");
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

                left: '4%',
                right: '5%',
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
                    fontSize: 12,
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