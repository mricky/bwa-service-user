
const { User } = require('../../../models');

module.exports = async(req,res) => {

    const id = req.params.id;

    const user = await User.findByPk(id);

    if(!user){
        return res.status(400).json({
            status: 'error',
            message: 'user not found'
        });
    }

    return res.json({
        status: 'success',
        data : user
    })
}