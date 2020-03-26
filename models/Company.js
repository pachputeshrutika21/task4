const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  useUnifiedTopology=true,
  useNewUrlParser=true
  var dbo = db.db("qliktagIntern");
  dbo.createCollection("Company", function(err, res) {
 if (err) throw err;
    console.log("Company Collection created!");
    db.close();
  });
});
const Company = mongoose.model('Company',new mongoose.Schema({
    company_name:{
        type:String,
        trim:true,
        unique:true
    },
    emailId:{
        type:String,
        trim:true,
        unique:true  
    }
}));
exports.Company=Company;