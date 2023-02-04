posts = [];
categories = [];
const fs = require("fs") 

module.exports.initialize = function()
{
    return new Promise((resolve, reject)=>{
       
        fs.readFile('./data/posts.json',(err,data)=>{
            if (err) reject("Failure to read file posts.json!");
            employees = JSON.parse(data);
        
        fs.readFile('./data/categories.json',(err,data)=>{
            if (err) reject("Failure to read file categories.json!");
            departments = JSON.parse(data);
         
           resolve();
        });
      });
    
    }); 
}


module.exports.getAllPosts = function(){
    return new Promise((resolve,reject)=>{
        if (posts.length>0)
            resolve(posts);
        else
            reject("No results returned.");
    });
}

exports.getPublishedPosts = function(){
    return new Promise((resolve, reject)=>{
        let published=[];
            posts.forEach(function (posts) {
                if (posts.isPublished) {
                    published.push(posts);
                }
            });
            
        if (published.length>0)
            resolve(lublished);
        else
            reject("No results returned.");
    });
}

module.exports.getCategories = function(){
    return new Promise((resolve,reject)=>{
         if (categories.length >0)
             resolve(categories);
         else
             reject("No results returned.");
    });
 }