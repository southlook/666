import React, { Component } from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd'
import axios from './../../axios/index'
export default class HighTable extends Component {
    state = {

    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request();
    }
    //动态获取Mock数据
    request = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => item.key = index)
                this.setState({
                    dataSource: res.result.list,
                })
            }
        })
    }
    handleChange = (pagination, filters, sorter) => {
        console.log("sorter", sorter)
        this.setState({
            sortOrder: sorter.order
        })
    }
    handleDelete = (item) => {
        // let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗?',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华狼子',
                        '3': '北大菜子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '跳舞',
                        '3': '唱歌',
                        '4': '打篮球',
                        '5': '跑步',
                        '6': '踢足球',
                        '7': '爬山',
                        '8': '看书',
                        '9': '追剧'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 80,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                dataIndex: 'time'
            },

        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left',

            },
            {
                title: '用户名',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华狼子',
                        '3': '北大菜子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '跳舞',
                        '3': '唱歌',
                        '4': '打篮球',
                        '5': '跑步',
                        '6': '踢足球',
                        '7': '爬山',
                        '8': '看书',
                        '9': '追剧'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday2'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday3'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday4'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday5'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday6'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday7'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday8'
            },
            {
                title: '地址',
                width: 80,
                fixed: 'right',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                fixed: 'right',
                dataIndex: 'time'
            },

        ]
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                key: "userName",
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder,

            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华狼子',
                        '3': '北大菜子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '跳舞',
                        '3': '唱歌',
                        '4': '打篮球',
                        '5': '跑步',
                        '6': '踢足球',
                        '7': '爬山',
                        '8': '看书',
                        '9': '追剧'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },

        ]
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                key: "userName",
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': "咸鱼一条",
                        '2': '风华狼子',
                        '3': '北大菜子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge status="success" text="成功" />,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />,

                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                }
            },

        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 260 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1648, y: 260 }}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}

                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
