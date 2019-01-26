const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

let UserSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    password: { type: String, required: true }
});

let User = mongoose.model('User', UserSchema);
// Set up the express app
const app = express();

app.use(bodyParser.json())

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log(err);
        console.log('MongoDB Not Connected');
    });

app.post('/register', (req, res) => {
    console.log(req.body);
    if (req.body) {
        const user = req.body;
        console.log(`User ${user}`);
        let users = new User({
            name: user.name,
            email: user.email,
            password: user.password
        })

        users.save((err) => {
            if (err) {
                res.status(500).send({
                    success: 'false',
                    message: 'Error While saving Data',
                })
            }
            res.status(200).send({
                success: 'true',
                message: 'User saved Successfully',
            })
        })
    } else {
        res.status(500).send({
            success: 'false',
            message: 'Data format Improper',
        })
    }
})

app.post('/login', (req, res) => {
    if (req.body.userId) {
        db.find(
            { userId: req.body.userId }
        )
    }
});
// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
    })
});
const PORT = 5556;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});