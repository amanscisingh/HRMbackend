const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {config} = require('dotenv');
config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/jobs', (req, res) => {
    res.send([{
        id: 1,
        title: 'Software Engineer',
        description: 'We are looking for a software engineer who can work on our new project',
        location: 'Bangalore',
        salary: '10LPA'
    }])
})

mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongodb connected....');
        app.listen(process.env.PORT, () => {
            console.log(`HRM app listening at http://localhost:${process.env.PORT}`)
        })
    })
    .catch(err => console.log(err.message));
