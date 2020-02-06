import {urlHandler, formDataHandler, errorCodeHandler} from './Helper'
import cookie from 'react-cookies';
import {TOKEN_NAME} from "../config/config";

export default class HttpRequest {

    static headers = {};

    static setTokenHeader() {
        let token = cookie.load(TOKEN_NAME);
        if (token) {
            this.headers['Token'] = token;
        }
    }

    static get = (url, params = {}, newHeaders = {}) => {
        this.setTokenHeader();
        Object.assign(newHeaders, this.headers);

        return fetch(urlHandler(url, params), {
            method: 'GET',
            headers: newHeaders,
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
        this.setTokenHeader();
        Object.assign(newHeaders, this.headers);

        return fetch(urlHandler(url), {
            method: 'POST',
            headers: newHeaders,
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
