// const {User} = require('../models')
const {UserService} = require('../services')
const {comparePasswords} = require('../utils')

module.exports={
    login: async (req, res) => {
    const {email, password} = req.body;
    try{
    const user = await UserService.findOneByEmail(email)
    if (!user) res.status(400).json({message: 'Email not valid'});
    const isValid = comparePasswords(password, user.password)
    if (!isValid) res.status(400).json({message: 'Contrasena no valida'});
    res.status(200).json({message: 'Bienvenido', token})
    } catch(error) {
        res.status(400).json(error)
    }
}

}   
