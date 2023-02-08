const express= require("express");
const Router= express.Router();
const dbconnected= require("./dbconnection");

Router.get("/api/user",(req, res)=>{
    dbconnected.query("select * from course", (err, rows, fields)=>{
        if(!err)
        {
        res.send(rows);
        } else {
            console.log(err);
        }
    })
});


module.exports= Router;