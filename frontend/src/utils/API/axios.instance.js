import axios from 'axios'

export default class FetchApi {
    api

    constructor(){
        this.api = axios.create({
            withCredentials: true,
            baseURL:`${import.meta.env.VITE_SERVER_URL}`
        })
    }
}
