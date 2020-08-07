const {User} = require('../models')

module.exports={
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id)
    .then((respDB)=> res.status(203).json({'mensaje': 'usuario eliminado'}))
    .catch((err)=> console.log(err));
}

}    
