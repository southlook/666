import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.less';
class Header extends Component {
    state = {};
    componentWillMount() {
        this.setState({
            userName: '将来'
        })
        let sysTime = Util.formateDate(new Date().getTime());
        this.setState({
            sysTime
        })
        setInterval(() => {
            sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData() {
        axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=0653be1db38d4329a3c121291a14d299')
            .then(res => {
                console.log(res.data.now.text + " " + res.data.now.windDir)
                let icon = res.data.now.icon
                let data = res.data.now.text + " " + res.data.now.windDir
                this.setState({
                    Icon: "qi-" + icon,
                    weather: data
                })
            })
    }
    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ?
                            <Col span={6} className="logo">
                                <img src="/assets/logo-ant.svg" alt="" />
                                <span> ebike管理系统</span>
                            </Col> : ''
                    }
                    <Col span={menuType ? 18 : 24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#/">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' : <Row className="breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                            {this.props.menuName}
                        </Col>
                        <Col span={20} className="weather">
                            <span className="date">{this.state.sysTime}</span>
                            <i className={this.state.Icon}></i>

                            <span className="weather-detail">
                                {this.state.weather}
                            </span>
                        </Col>
                    </Row>
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header)