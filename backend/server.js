const express = require("express");
const mongoosse = require('mongoose');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDB = require('./Config/db.js')
const router = require('./Routes/UserRoutes.js');

const app = express();
connectDB();
console.log("dnfod")
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use('/api/auth',router)

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})