/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Humaira Shaikh Student ID: 139877203 Date: 02/03/2023
*
*  Cyclic Web App URL: ________________________________________________________
*
*  GitHub Repository URL: ______________________________________________________
*
********************************************************************************/ 

var express = require("express");
var app = express();
var path = require("path");
var data_service = require("./blog-service.js");
var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

//adding more routes 

app.get("/blogs", (req,res)=>{
    data_service.getBlogs().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
});

app.get("/posts",(req,res)=>{
    data_service.getAllPosts().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
});

app.get("/categories",(req,res)=>{
    data_service.getCategories().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
});

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

blog_service.initialize().then(()=>{
    //listen on HTTP_PORT
    app.listen(HTTP_PORT, onHttpStart);
}).catch(()=>{
    console.log("Cannot open files.");
});