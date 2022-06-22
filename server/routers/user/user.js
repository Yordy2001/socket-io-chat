const { User } = require('../../db/')

const register = (req, res) =>{
    socket.on( 'client:register', async (register) => {
        const {name, tel, portada, info} = register
        try {
            await User.create({
                full_name: name,
                tel,
                portada,
                info
            })

        } catch (error) {
            console.log(error)
        }
    });
}
