const mongoose = require('mongoose')

const connectionString = process.env.DBCONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDb connected Successfully");
}).catch(err=>{
    console.log("connection failed");
    console.log(err);
})