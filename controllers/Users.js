const UsersModel = require('../models/Users');
const userModel = new UsersModel

class Users {
    static get(req, res) {
        const id = req.params.id;
        userModel.get(id)
            .then(user => {
                if (!user.exists) {
                    return res.sendStatus(204)
                }

                res.json(user.data())
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            })
    }
}

module.exports = Users;