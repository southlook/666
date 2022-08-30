import React, { Component } from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import utils from '../../utils/utils'
export default class BasicTable extends Component {
    state = {
        dataSource2: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        const data = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Jfgh',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市',
                time: '08:00'
            }
        ]
        data.map((item, index) => item.key = index)//给每个Data添加一个KEY值
        this.setState({
            dataSource: data,
        })
        this.request();
    }

    //动态获取Mock数据

    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
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
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: utils.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名:${record.userName},用户爱好:${record.interest}`
        })
        this.setState({
            selectedRowKeys1: selectKey,
            selectedItem: record
        })
    }
    //多选执行删除动作
    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            return ids.push(item.id)
        })
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗?${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    })

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
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
        const { selectedRowKeys1 } = this.state
        const rowSelection = {
            type: 'radio',
            selectedRowKeys1
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys1,
            onChange: (selectedRowKeys1, selectedRows1) => {
                // let ids = [];
                // selectedRows.map((item) => {
                //     return ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys1,
                    // selectedIds: ids
                    selectedRows1

                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                },
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-复选" style={{ margin: '10px 0' }}>
                    <div style={{ marginBottom: 10 }}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
