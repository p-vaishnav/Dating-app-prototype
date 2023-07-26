// create a connection to the db mongodb via mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/express-mongoose-api', { useNewUrlParser: true })
.then(() => {
    console.log('Connected to the database')
})
.catch((error) => {console.log('error while connecting', error)})