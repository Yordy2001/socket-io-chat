const fetchApi = require('./axios.instance')

module.exports = class fetchAuth extends fetchApi {
    async logIn(data){
        await this.api.get('/login', data)
    }
    
    async logOut(){
        await this.api.get('/logout')
    }

    async register(data){
        await this.api.get('/register', data)
    }
}
