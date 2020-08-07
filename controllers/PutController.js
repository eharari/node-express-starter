const {User} = require('../models')

module.exports={
    patch: (req, res) => {
        const {body} = req;
        User.findByIdAndUpdate(req.params.id, body, {new:true})
    .then((respDB)=> res.status(200).json(respDB))
    .catch((err)=> console.log(err));
}

}    
