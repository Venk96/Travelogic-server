const express = require('express');

// create express app
const app = express();

// setup server port
const port = process.env.PORT || 5000;

// define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// import users route
const userRoutes = require('./src/routes/user.route');

// create user routes
app.use('/api/v1/users', userRoutes);

// listen to port
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
