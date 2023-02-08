const sqlconnection= require("mysql");
const dotenv =require("dotenv");
dotenv.config({path:"./config.env"});

const sqldbconnection= sqlconnection.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

  multipleStatements:true
});
sqldbconnection.connect((err)=>{
    if(!err)
    {
    console.log("Database Connected");
    } else{
        console.log("Database Not Connected");    
    }

});

module.exports= sqldbconnection;