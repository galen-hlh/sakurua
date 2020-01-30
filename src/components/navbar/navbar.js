import React from 'react';
import './navbar.scss';
import '../../common/common.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="width-limit clearfix">
                    <div className="logo">
                        <img src={require('../../images/favicon.ico')} alt="logo" />
                    </div>
                    <div className="navbar-container">
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="navbar-nav-item active"><a href="/">首页</a></li>
                                <li className="navbar-nav-item"><a href="/">MySQL</a></li>
                                <li className="navbar-nav-item"><a href="/">PHP</a></li>
                                <li className="navbar-nav-item"><a href="/">Micro</a></li>
                                <li className="navbar-nav-item search">
                                    <form action="">
                                        <input className="search-input" type="text" placeholder="搜索"/>
                                        <a className="search-btn" href="/">
                                            <i className="fa fa-search"/>
                                        </a>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}