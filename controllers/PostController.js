const {User} = require('../models')
const {UserService} = require('../services')


module.exports={
    create: async (req, res) => {
    const {body} = req;
    try{
    const userExists = await UserService.findOneByEmail(body.email);
    if (userExists) res.status(400).json({message: 'Email taken'});
    else {
    const newUser = new User(body);
    const user = await newUser.save();
    res.status(201).json(user);
    }
    } catch(error) {
        res.status(400).json(error)
    }
}

}    
