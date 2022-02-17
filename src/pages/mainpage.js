import React, { useState, useContext, useEffect } from 'react';

/* Plugin */
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Button,Form,Checkbox,Input} from 'antd';

const { Content, Footer } = Layout;

function MainPage() {
    // const Login = () => {
        const onFinish = (values) => {
            console.log("Success:", values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };
    // }
    
    return(
        <>
            <Layout className="layout">
                <div className="login-page">
                    <div className="login-box">
                        <div className="illustration-wrapper">
                            <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
                        </div>
                        <Form
                            name="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <p className="form-title">Welcome back</p>
                            <p>Login to the Dashboard</p>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input placeholder="Username" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input placeholder="Password" />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    >
                                    LOGIN
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default MainPage;