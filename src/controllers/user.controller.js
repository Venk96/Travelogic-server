// get user list
const UserModel = require('../models/user.model');


exports.getUsersList = ((req, res) => {
    // console.log('All users list');
    UserModel.getAllUsers((err, users) => {
        console.log('Here the');
        if (err)
        res.send(err);
        console.log('Users', users);
        res.send(users);
    });
});