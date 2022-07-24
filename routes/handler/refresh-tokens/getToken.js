const refreshTokens = require('.');
const { RefreshToken } = require('../../../models');

module.exports = async (req,res) => {

    const refreshToken = req.query.refresh_token;

    const data = await RefreshToken.findOne({
        where: { token: refreshToken }
    });
   
    if(!data){
        res.status(400).json({
            status: 'error',
            message: 'invalid token'
        })
    }

    res.json({
        status: 'success',
        token : data
    })
}