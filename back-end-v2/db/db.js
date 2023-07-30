require('dotenv').config();
// create a connection to the db mongodb via mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => {
    console.log('Connected to the database')
})
.catch((error) => {console.log('error while connecting', error)})