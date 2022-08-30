import React, { Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
const FormItem = Form.Item;
class FormLogin extends Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form //getFieldDecorator获取表单值
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    {/* Formz属性 layout="horizontal" 设置水平方向属性 默认horizontal*/}
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: "",
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: "长度不在范围内"
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g'),// /^\w+$/g,pattern为正则表达式校验
                                            message: '用户名必须为英文字母或者数字'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder='请输入用户名' autoComplete='off' />)
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: "",
                                    rules: []
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder='请输入密码' />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: []
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="/#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>

        )
    }
}
export default Form.create()(FormLogin);
