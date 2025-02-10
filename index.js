require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./routers/router')
require('./database/dbConnection')
const exServer = express()
exServer.use(cors())
exServer.use(express.json())

exServer.use(router)
const PORT = 3000 || process.env.PORT
exServer.listen(PORT,()=>{
    console.log(`server running at port : ${PORT}`);
})