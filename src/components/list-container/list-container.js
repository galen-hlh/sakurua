import React from 'react';
import './list-container.scss';
import '../../fonts/fontawesome/scss/font-awesome.scss';

export default class ListContainer extends React.Component {
    render() {
        return (
            <div id="list-container">
                <ul className="note-list">
                    <li className="have-img">
                        <a className="wrap-img" href="/" target="_blank">
                            <img className="img-blur-done"
                                 src="//upload-images.jianshu.io/upload_images/16383436-17f9626f4a5beb3f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                 alt="120"/>
                        </a>
                        <div className="content">
                            <a className="title" target="_blank" href="/">绘画艺术丨今日教程：一株美丽的水仙花</a>
                            <p className="abstract">
                                彩铅教程 : 水仙花~ 画材 纸：获多福细纹水彩纸 笔：辉柏嘉绿盒60色 绘图流程解读 水仙线条图↓↓↓ 1、构图定位，先用可擦中性笔定下水仙花...
                            </p>
                            <div className="meta">
                                <a className="nickname" target="_blank" href="/">教画画的小然</a>
                                <a target="_blank" href="/">
                                    <i className="fa fa-comment"/> 5
                                </a>
                                <span><i className="fa fa-heart"/> 91</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a className="title" target="_blank" href="/">绘画艺术丨今日教程：一株美丽的水仙花</a>
                            <p className="abstract">
                                彩铅教程 : 水仙花~ 画材 纸：获多福细纹水彩纸 笔：辉柏嘉绿盒60色 绘图流程解读 水仙线条图↓↓↓ 1、构图定位，先用可擦中性笔定下水仙花...
                            </p>
                            <div className="meta">
                                <a className="nickname" target="_blank" href="/">教画画的小然</a>
                                <a target="_blank" href="/">
                                    <i className="fa fa-comment"/> 5
                                </a>
                                <span><i className="fa fa-heart"/> 91</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a className="title" target="_blank" href="/">绘画艺术丨今日教程：一株美丽的水仙花</a>
                            <p className="abstract">
                                彩铅教程 : 水仙花~ 画材 纸：获多福细纹水彩纸 笔：辉柏嘉绿盒60色 绘图流程解读 水仙线条图↓↓↓ 1、构图定位，先用可擦中性笔定下水仙花...
                            </p>
                            <div className="meta">
                                <a className="nickname" target="_blank" href="/">教画画的小然</a>
                                <a target="_blank" href="/">
                                    <i className="fa fa-comment"/> 5
                                </a>
                                <span><i className="fa fa-heart"/> 91</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                            <a className="title" target="_blank" href="/">绘画艺术丨今日教程：一株美丽的水仙花</a>
                            <p className="abstract">
                                彩铅教程 : 水仙花~ 画材 纸：获多福细纹水彩纸 笔：辉柏嘉绿盒60色 绘图流程解读 水仙线条图↓↓↓ 1、构图定位，先用可擦中性笔定下水仙花...
                            </p>
                            <div className="meta">
                                <a className="nickname" target="_blank" href="/">教画画的小然</a>
                                <a target="_blank" href="/">
                                    <i className="fa fa-comment"/> 5
                                </a>
                                <span><i className="fa fa-heart"/> 91</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}