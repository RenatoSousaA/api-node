const BaseModel = require('./BaseModel');

class Users extends BaseModel {

    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getAll() {
        return this.db
            .collection('users')
            .get()
    }
}

module.exports = Users;