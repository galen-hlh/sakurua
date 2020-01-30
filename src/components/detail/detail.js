import React, {Component} from 'react'
import Nav from '../navbar/navbar'
import {Col, Row} from 'react-flexbox-grid';
import './detail.scss';

export default class Detail extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <div className="bg-f9f9f9">
                <Nav/>
                <div className="container clearfix">
                    <Row className="margin-top-20">
                        <Col xs={16} className="main bg-fff">
                            <section className="article">
                                <h1 className="title">我干了一件羞于启口的事</h1>
                                <div className="author-info">
                                    <a href="/" className="author-img">
                                        <img
                                            src="https://upload.jianshu.io/users/upload_avatars/8930196/c503c9f8-6f20-4797-8073-1f83dcf2f413.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                                            alt="header"/>
                                    </a>
                                    <div style={{"margin-left": "8px"}}>
                                        <div className="author-name">
                                            <span>用水点烟</span>
                                        </div>
                                        <div className="author-desc">
                                            <span>2019-08-09 12:12 </span>
                                            <span>字数:541</span>
                                            <span>阅读数:111</span>
                                        </div>
                                    </div>
                                </div>
                                <article>

                                </article>
                            </section>
                        </Col>
                        <Col xs={7} xsOffset={1} className="aside" style={{marginLeft: "1%",paddingTop:0}}>
                            <div className="recommended">
                                <section>
                                    <h3>推荐阅读</h3>
                                    <div className="item">
                                        <div className="title">
                                            <a href="/detail">男票“想睡你”和“爱上你”很容易分辨，傻丫头，别被爱情蒙蔽了</a>
                                        </div>
                                        <div className="read-num"><span>阅读 12,660</span></div>
                                    </div>
                                    <div className="item">
                                        <div className="title">
                                            <a href="/detail">爱，是做出来的</a>
                                        </div>
                                        <div className="read-num"><span>阅读 12,660</span></div>
                                    </div>
                                    <div className="item">
                                        <div className="title">
                                            <a href="/detail">致2020的自己</a>
                                        </div>
                                        <div className="read-num"><span>阅读 12,660</span></div>
                                    </div>

                                    <div className="item">
                                        <div className="title">
                                            <a href="/detail">越有本事的男人，越看不上这三种女人，希望你不是</a>
                                        </div>
                                        <div className="read-num"><span>阅读 12,660</span></div>
                                    </div>

                                    <div className="item">
                                        <div className="title">
                                            <a href="/detail">什么样的女生让人一看就是没有谈过恋爱？</a>
                                        </div>
                                        <div className="read-num"><span>阅读 12,660</span></div>
                                    </div>
                                </section>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}