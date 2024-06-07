const {User} = require('../model')

exports.register = async (name, email, password, role) => {
    try {
        const user = new User({name, email, password, role}).save()
        

        return user
    } catch (error) {
        throw new Error(error.message)
    }

}


exports.login = async (email, password) => {
    try {
        const user = await User.findOne({
            email,
            password
        })

        return user
    } catch (error) {
        throw new Error(error.message)
    }
}

