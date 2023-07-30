// write boilerplate code here for express app not usining import
const express = require('express');
require('dotenv').config();

const userRouter = require('../route/user.route');
const feedbackRouter = require('../route/feedback.route');
const communityRouter = require('../route/community.post.route');
const planRouter = require('../route/plan.route');

const app = express();
const PORT = process.env.PORT || 8000;

// using middle-ware
app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/community", communityRouter);
app.use("/api/v1/plan", planRouter);

app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});


// how to see name of the docker image
// docker images

// how to build a container
// docker build -t=<name-of-the-container> .

// how to run a container (by command line port mapping is important)
// docker run -p <port>:<port> <name-of-the-container>

// how  to start a docker-compose file
// docker-compose up