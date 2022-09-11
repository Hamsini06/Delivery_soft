/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
data = "";
val = "";
store_arr = new Set();
user_data = null;
chk_data = [];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/digi_users",{useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  mobile: String,
  store: String,
  order_no: String,
  status: String
});

const delSchema = new mongoose.Schema({
  mobile:String,
  store:String,
  order_no: String,
  address: String,
  time: String,
  tip: String
});

const userModel = mongoose.model("users",userSchema);
const delModel = mongoose.model("delStatus",delSchema);

app.get('/',function(req,res){
  res.render("homepage");
});

app.get('/auth',function(req,res){
  res.render("auth");
});

app.get('/orders',function(req,res){
  if(check == true){
    res.render("orders",{stores:store_arr,data:user_data});
  }
});

app.get('/del',function(req,res){
  if(chk_data.length ==0){
    user_data.forEach(function(val){
      if(val.status=="Pending"){
        chk_data.push(val);
      }
    });
  }
    res.render("del",{data:chk_data});
});

app.post('/del',function(req,res){
  const del_info = new delModel({
      mobile: val,
      store: req.body.store,
      order_no: req.body.order_no,
      address: req.body.address,
      time: req.body.time,
      tip: req.body.tip
  });
  del_info.save();
  res.redirect("/del");
  // userModel.updateOne({})

});
app.post('/auth',function(req,res){
  val = req.body.mobile;
  console.log(val);
  data = userModel.distinct("store");
  console.log(data);
  userModel.find({mobile: val},function(err,userModel){
    if(err){
      console.log(error);
    }
    else{
      if(userModel.length>0){
        check = true;
        user_data = userModel;
        console.log(user_data);
      userModel.forEach(function(val){
        store_arr.add(val.store);
      });
      res.redirect("/orders");
    }
    else{
      data = "Please enter a registered number";
      res.render("auth",{data:data});
    }
    }

  });

});

function cc(){
  alert("hello");
}

function getData(){
  console.log(conceptName);
  userModel.find({store: conceptName},function(err,userModel){
    if(err){
      console.log(err);
    }
    else{
      console.log(userModel);
    }
  });
}

app.listen(3000, function(){
  console.log("server running on port 3000");
});
