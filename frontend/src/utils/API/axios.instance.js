const axios = require('axios')

module.exports = class FetchApi {
    api
    constructor(){
        this.api = axios.create({
            withCredentials: true,
            baseURL: ""
        })
    }
}
