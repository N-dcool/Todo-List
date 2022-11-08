const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date());

let items = ["buy food", "cook food", "eat food"];
let workItems = [];


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    let day = date();

    res.render("list", {
        listTitle : day,
        newListItems : items,
    });
});

app.post("/", function(req,res){

    let currTitle = req.body.button;

    let item = req.body.newItem;

    if(currTitle === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{ 
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {
        listTitle : "Work List",
        newListItems : workItems
    });
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});
