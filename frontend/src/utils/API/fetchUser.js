import FetchApi from './axios.instance'

export default class friendsApi extends FetchApi {
    // server endpoint
    endPoint= '/friends'

    async getFriend(tel){
        const user =  await this.api.get(this.endPoint+`/${tel}`)
        return user.data
    }
    
    async getFriends(){
        const user =  await this.api.get(this.endPoint)
        return user.data
    }

    async addFriend(data){
        const user =  await this.api.post( this.endPoint, data )
        return user.data
    }
}
