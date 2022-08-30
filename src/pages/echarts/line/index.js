import React, { Component } from 'react'
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class Line extends Component {

    getOption1 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: [
                    '周一', '周二', '周三', '周四', '周五', '周六', '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        4000,
                        5000,
                        800
                    ]
                }
            ]
        }
        return option;
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['ofo订单量', '摩拜订单量']
            },
            xAxis: {
                type: 'category',
                data: [
                    '周一', '周二', '周三', '周四', '周五', '周六', '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'ofo订单量',
                    type: 'line',
                    data: [
                        1000,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        5000,
                        10000,
                        12000
                    ]
                }
            ]
        }
        return option;
    }
    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    '周一', '周二', '周三', '周四', '周五', '周六', '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        4000,
                        5000,
                        800
                    ],
                    areaStyle: {

                    }
                }
            ]
        }



        return option;
    }

    render() {
        return (
            <div>
                <Card title="折线图表之一">
                    <ReactEcharts option={this.getOption1()} style={{ height: 500 }} />
                </Card>
                <Card title="折线图表之二">
                    <ReactEcharts option={this.getOption2()} style={{ height: 500 }} />
                </Card>
                <Card title="折线图表之三">
                    <ReactEcharts option={this.getOption3()} style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}




