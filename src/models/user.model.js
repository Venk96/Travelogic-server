var dbconnection = require('../../config/db.config');

var Users = (user) => {
    this.username = user.username;
    this.password = user.password;
}

// get all users
Users.getAllUsers = (result) => {
    dbconnection.query('SELECT *  FROM users', (err, res) => {
        if (err) {
            console.log('Error while fetching users');
            result(null, err);
        } else {
            console.log('Users fetched successfully');
            result(null, res);
        }
    });
}

module.exports = Users;