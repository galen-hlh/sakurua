/**
 * 拼接get请求的字段
 * @param url
 * @param params
 * @returns {*}
 */
export function handleUrl(url, params) {
    if (params && Object.keys(params).length !== 0) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
        if (url.search(/\?/) === -1) {
            if (typeof (params) === 'object'){
                url += '?' + paramsArray.join('&')
            }
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url
}