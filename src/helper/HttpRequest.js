import {Component} from 'react'
import {urlHandler, formDataHandler, errorCodeHandler} from './Helper'

export default class HttpRequest extends Component {

    static get = (url, params = {}, newHeaders = {}) => {
        let headers = {};
        Object.assign(headers, newHeaders);

        return fetch(urlHandler(url, params), {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {

                return response.json()
            }).then(function (response) {
                errorCodeHandler(response.code, response.msg);
                return response;
            })
            .catch((error) => {
                return error
            })
    };

    static post = (url, params = {}, newHeaders = {}) => {
        let headers = {};
        Object.assign(headers, newHeaders);

        return fetch(urlHandler(url), {
            method: 'POST',
            headers: headers,
            body: formDataHandler(params)
        })
            .then((response) => {
                return response.json();
            }).then(function (response) {
                errorCodeHandler(response.code, response.msg);
                return response;
            })
            .catch((error) => {
                return error
            })
    }
}
