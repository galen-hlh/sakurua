import React, {Component} from 'react'
import Nav from '../navbar/navbar'
import {Col, Row} from 'react-flexbox-grid';
import './detail.scss';
import HttpRequest from "../../helper/HttpRequest";
import {BASE_URL} from "../../config/config";
import marked from 'marked';
import Prism from 'prismjs';

export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {}
        };
    }

    UNSAFE_componentWillMount() {
        let _this = this;
        let id = this.props.match.params.id;
        HttpRequest.get(BASE_URL + "/article/" + id).then(function (resp) {
            _this.setState({info: resp.data.info});
            Prism.highlightAll();
        });
    }

    componentDidMount() {
        // setTimeout(function () {
        //     Prism.highlightAll()
        // },2000);

    }


    static renderContent(val) {
        if (val) {
            // loadLanguages(['html', 'css', 'js', 'php']);
            let html = marked(val);
            let domTree = document.createElement("div");
            domTree.innerHTML = html;
            // let doms = domTree.getElementsByTagName('code');
            // for (let i=0; i < doms.length; i++){
            //     let item = doms[i];
            //     let languages = item.className.split('-');
            //     if (languages.length === 2) {
            //         try{
            //             doms[i].innerHTML = Prism.highlight(item.textContent, Prism.languages[languages[1]], languages[1]);
            //         }catch (e) {
            //             continue;
            //         }
            //     }
            // }
            return domTree.innerHTML;
        }
        return '';
    }

    render() {
        let row = this.state.info;
        return (
            <div className="bg-f9f9f9">
                <Nav/>
                <div className="container clearfix">
                    <Row className="margin-top-20">
                        <Col xs={16} className="main bg-fff">
                            <section className="article">
                                <h1 className="title">{row.title}</h1>
                                <div className="author-info">
                                    <a href="/" className="author-img">
                                        <img
                                            src={"//" + row['publisher_avatar']}
                                            alt="header"/>
                                    </a>
                                    <div style={{marginLeft: "8px"}}>
                                        <div className="author-name">
                                            <span>{row['publisher_name']}</span>
                                        </div>
                                        <div className="author-desc">
                                            <span>2019-08-09 12:12 </span>
                                            <span>字数:{row['words_num']}</span>
                                            <span>阅读数:{row['view_num']}</span>
                                        </div>
                                    </div>
                                </div>
                                <article className="for-container">
                                    <div className="for-panel for-editor-preview">
                                        <div className="for-preview for-markdown-preview"
                                             dangerouslySetInnerHTML={{__html: Detail.renderContent(row['content'])}}>

                                        </div>
                                    </div>
                                </article>
                            </section>
                        </Col>
                        <Col xs={7} xsOffset={1} className="aside" style={{marginLeft: "1%", paddingTop: 0}}>
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