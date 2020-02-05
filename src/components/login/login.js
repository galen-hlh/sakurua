import React, {Component} from 'react'
import HttpRequest from "../../helper/HttpRequest";
import {BASE_URL} from "../../config/config";
import "./login.scss";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    login = (event) => {
        event.preventDefault();
        let params = {
            username: this.state.username,
            password: this.state.password,
        };
        HttpRequest.post(BASE_URL + "/v1/admin/login", params).then(function (resp) {
            if (resp.code === 0) {
                alert("登录成功")
            }
        });
        return false;
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


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
                            <a className="active" href="/sign_in">登录</a>
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

                            <button className="sign-in-button" id="sign-in-form-submit-btn" type="submit">
                                <span id="sign-in-loading"/>登录
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}