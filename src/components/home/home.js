import React from 'react';
import Nav from '../navbar/navbar'
import './home.scss';
import ListContainer from '../list-container/list-container'
import {Row, Col} from 'react-flexbox-grid';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <div className="banner">
                    <div className="bg"/>
                </div>
                <div className="container clearfix">
                    <Row>
                        <Col xs={16} className="main">
                            <ListContainer/>
                        </Col>
                        <Col xs={7} xsOffset={1} className="aside">
                            <div className="board">
                                <a target="_blank" href="/mobile/club">
                                    <img
                                        src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                                        alt="Banner s club"/>
                                </a>
                                <a target="_blank" href="/mobile/books?category_id=284">
                                    <img
                                        src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                                        alt="Banner s 7"/>
                                </a>
                                <a target="_blank" href="/publications">
                                    <img
                                        src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
                                        alt="Banner s 5"/>
                                </a>
                                <a target="_blank"
                                   href="/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop">
                                    <img
                                        src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
                                        alt="Banner s 6"/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}