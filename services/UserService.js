const user = require('../models')

module.exports = {
    findOneByEmail: (email)=> user.findOne({email, is_active: true})
}