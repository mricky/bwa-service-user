const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const schema = {
        name : 'string|empty:false',
        email : 'email|empty:false',
        password: 'string|min:6',
        profession: 'string|optional',
        avatar: 'string|optional'
    }

    const validate = v.validate(req.body, schema); // ini return array, klo ada isinya mean error

    if(validate.length){
        return res.status(400).json({
            'status': 'error',
            'message' :validate
        });
    }

    const id = await req.params.id;
    const user = await User.findByPk(id);

    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    // check exist email
    const email = await req.body.email;
    if(email){
         const checkEmail = await User.findOne({
           where: { email }
         })

         if(checkEmail && email !== user.email){
            return res.json(409).json({
                status: 'error',
                message: 'email already exist'
            })
        }
    }
   
    const password = await bcrypt.hash(req.body.password,10);

    // definisi variable
    const {
        name, profession,avatar
    } = req.body;

    await user.update({
        name,
        email,
        password,
        profession,
        avatar
    })

    return res.status(200).json({
        'status' : 'success',
        'data' : {
            id: user.id,
            name: user.name,
            profession: user.profession,
            avatar: user.avatar
        }
    })

}