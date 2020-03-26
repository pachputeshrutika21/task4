const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  useUnifiedTopology=true,
  useNewUrlParser=true
  var dbo = db.db("qliktagIntern");
  dbo.createCollection("User", function(err, res) {
 if (err) throw err;
    console.log("User Collection created!");
    db.close();
  });
});
const User = mongoose.model('User',new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true
    },
    city: {
        type: String,
        trim: true,
    },
    state: {    
        type: String,
        trim: true,
    },
    emailId:{
        type:String,
        trim:true,
        unique: true,
        required: 'Email address is required'
    }
}));

exports.User=User;