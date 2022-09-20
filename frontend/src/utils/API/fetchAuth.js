import FetchApi from './axios.instance'

export default class fetchAuth extends FetchApi {
    // server endpoint
    endPoint = '/login'

    async logIn(data){
        await this.api.post(this.endPoint, data)
        return
    }
    
    async logOut(){
        await this.api.post(this.endPoint)
        return
    }

    async register(data){
        await this.api.post(this.endPoint, data)
        return
    }
}
