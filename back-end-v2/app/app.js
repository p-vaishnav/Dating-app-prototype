// write boilerplate code here for express app not usining import
const express = require('express');
require('dotenv').config();
const userRouter = require('./route/user.route');
const feedbackRouter = require('./route/feedback.route');

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/user", router);
app.use("/feedback", feedback);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});