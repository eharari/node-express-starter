const {User} = require('../models')

module.exports={
    findAll:(req, res)=>{
        User.find()
        .then((respDB)=> res.status(200).json(respDB))
        .catch((err)=> console.log(err));

},
    findOne: (req, res)=>{
        User.findById(req.params.id)
        .then((respDB)=> res.status(200).json(respDB))
        .catch((err)=> console.log(err));

    },
   

}    
