import {REQUEST_SUCCESS_CODE, USER_NOT_LOGIN_CODE} from "../config/config";

/**
 * 拼接get请求的字段
 * @param url
 * @param params
 * @returns {*}
 */
export function urlHandler(url, params) {
    if (params && Object.keys(params).length !== 0) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
        if (url.search(/\?/) === -1) {
            if (typeof (params) === 'object') {
                url += '?' + paramsArray.join('&')
            }
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url
}

/**
 * 拼接formData
 * @param params
 * @returns {FormData}
 */
export function formDataHandler(params) {
    let formData = new FormData();
    Object.keys(params).forEach(key => formData.append(key, params[key]));
    return formData;
}

/**
 * 处理http返回错误码
 * @param code
 * @param msg
 */
export function errorCodeHandler(code, msg) {
    if (code !== REQUEST_SUCCESS_CODE) {
        alert(msg);
    }
    if (code === USER_NOT_LOGIN_CODE) {
        alert(msg);
    }
}