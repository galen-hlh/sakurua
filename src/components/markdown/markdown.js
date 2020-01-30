import React, { Component } from 'react'
import Editor from 'for-editor'
import HttpRequest from "../../helper/HttpRequest";

export default class Markdown extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.$vm = React.createRef()
    }

    componentWillMount(){
        HttpRequest.get('https://saas.dev.styd.cn/_api/v1/staff/info',{'a':1}, {'Token':'12312313132'}).then(function (res) {
            console.log(res)
        })
    }

    handleChange(value) {
        this.setState({
            value
        })
    }

    addImg($file) {
        this.$vm.current.$img2Url($file.name, 'file_url');
    }

    render() {
        const { value } = this.state;

        return (
            <Editor
                ref={this.$vm}
                value={value}
                addImg={($file) => this.addImg($file)}
                onChange={value => this.handleChange(value)}
            />
        )
    }
}