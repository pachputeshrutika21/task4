const mongoose=require('mongoose');
require('dotenv').config({path:'variables.env'});
mongoose.connect(process.env.DATABASE);
mongoose.Promise=global.Promise;
mongoose.connection.on('error',(err)=>{
    console.log("error"+err);
});
require('./models/User');
require('./models/Company');
const app = require('./app');
    app.set('port', process.env.PORT);
     const server = app.listen(app.get('port'), () => { 
     console.log(`Express running from ${server.address().port}`);
  });