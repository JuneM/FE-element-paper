import xhr from './xhr'

export default {
    /**
     * 获取数据
     * @returns
     */
    getData: xhr.get.bind(null, '/api/xx')
}