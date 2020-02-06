import React, {Component} from 'react'
import HttpRequest from "../../helper/HttpRequest";
import {BASE_URL, TOKEN_NAME} from "../../config/config";
import {Button} from 'antd';
import {Notice} from '../../helper/Notice';
import cookie from 'react-cookies';
import "./login.scss";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        };
    };

    login = (event) => {
        let _this = this;
        _this.setState({loading: true});
        event.preventDefault();
        let params = {
            username: this.state.username,
            password: this.state.password,
        };
        HttpRequest.post(BASE_URL + "/v1/admin/login", params).then(function (resp) {
            _this.setState({loading: false});
            if (resp.code === 0) {
                Notice.success("登录成功");
                let token = resp.data.token;
                let jwt = JSON.parse(atob(token.split('.')[1]));
                let date = new Date(jwt['exp'] * 1000);
                cookie.save(TOKEN_NAME, token, {expires: date});
            }
        }).catch(function (e) {
            _this.setState({loading: false});
        });

        return false;
    };

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
            <div className="sign">
                <div className="logo">
                    <a href="/">
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"/>
                    </a>
                </div>
                <div className="main">
                    <h4 className="title">
                        <div className="normal-title">
                            <a className="active">登录</a>
                        </div>
                    </h4>
                    <div className="js-sign-in-container">
                        <form id="new_session" acceptCharset="UTF-8" method="post" onSubmit={this.login}>
                            <input name="utf8" type="hidden" value="✓"/>
                            <input type="hidden" name="authenticity_token"/>

                            <div className="input-prepend restyle js-normal">
                                <input placeholder="手机号或邮箱" name="username" type="text" onChange={this.onChangeValue}/>
                                <i className="fa fa-user"/>
                            </div>

                            <div className="input-prepend">
                                <input placeholder="密码" name="password" type="password" onChange={this.onChangeValue}/>
                                <i className="fa fa-lock"/>
                            </div>
                            <Button className="sign-in-button" type="primary" shape="round" loading={this.state.loading}
                                    htmlType="submit" block>
                                登录
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}