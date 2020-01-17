import {Component} from 'react'
import {handleUrl} from './Helper'

export default class HttpRequest extends Component {
    static get = (url, params = {}, newHeaders = {}) => {
        let headers = {};
        let baseHeaders = {};
        Object.assign(headers, baseHeaders, newHeaders);

        return fetch(handleUrl(url, params), {
            method: 'GET',
            headers: headers,
            mode: 'no-cors'
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error
            })
    }
}
