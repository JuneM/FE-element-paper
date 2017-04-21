/**
 * 对接口进行统一处理
 */

import axios from 'axios'
import qs from 'qs'

function finalUrl(url, params) {
    return [url].concat(params).join('/')
}

function handleResponse(res) {
    const { data, code } = res.data
    // 约定格式
    // {
    //     code: xxx,
    //     data: xxx
    // }
    // code == 0 表示成功
    if (code === 0) {
        return Promise.resolve(data)
    }

    // 这里可以做一些特殊处理，比如code === 01 未登录，进行url跳转
    return Promise.reject(data)
}

function get(url, { params = [], query = {} }) {
    return axios.get(finalUrl(url, params), { params: query }).then(handleResponse)
}

function post(url, { params = [], query = {} }) {
    return axios.post(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function put(url, { params = [], query = {} }) {
    return axios.put(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function del(url, { params = [], query = {} }) {
    return axios.delete(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function patch(url, { params = [], query = {} }) {
    return axios.patch(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

export default {
    get,
    post,
    put,
    del,
    patch
}