/**
 * const jwt = require('jsonwebtoken');
 * const { secret } = require('../config/defaut');
 * 
 * const token = jwt.sign(
 *               { id },
 *               config.secret,
 *               { expiresIn: 300 }
 *           );
 */



const jwt = require('jsonwebtoken');
const { secret } = require('../config/defaut');

module.exports = (data, expiresIn = 300) =>
    jwt.sign(
        data,
        secret,
        { expiresIn }
    );