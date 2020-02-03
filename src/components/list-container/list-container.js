import React from 'react';
import './list-container.scss';
import '../../fonts/fontawesome/scss/font-awesome.scss';
import HttpRequest from "../../helper/HttpRequest";
import {BASE_URL} from "../../config/config";

export default class ListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            total_counts: 0,
            total_pages: 0,
            current_page: 1
        };
    }

    componentWillMount() {
        let _self = this;
        HttpRequest.get(BASE_URL + "/article").then(function (resp) {
            _self.setState(resp.data);
        });
    }


    static getDetailUrl(id) {
        return "/detail/" + id;
    }

    static renderAvatar(id, avatar) {
        if (avatar) {
            return (<a className="wrap-img" href={ListContainer.getDetailUrl(id)}>
                <img className="img-blur-done"
                     src={"//" + avatar}
                     alt="120"/>
            </a>)
        }
        return ('');
    }

    render() {
        let list = this.state.list;
        return (
            <div id="list-container">
                <ul className="note-list">
                    {
                        list.map(function (row) {
                            return (
                                <li className="have-img">
                                    {ListContainer.renderAvatar(row['id'], row['image'])}
                                    <div className="content">
                                        <a className="title" href={ListContainer.getDetailUrl(row['id'])}>
                                            {row['title']}
                                        </a>
                                        <p className="abstract">
                                            {row['description']}
                                        </p>
                                        <div className="meta">
                                            <a className="nickname"
                                               href={ListContainer.getDetailUrl(row['id'])}>{row['publisher_name']}</a>
                                            <a href="/">
                                                <i className="fa fa-comment"/> {row['reply_num']}
                                            </a>
                                            <span><i className="fa fa-heart"/> {row['like_num']}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}