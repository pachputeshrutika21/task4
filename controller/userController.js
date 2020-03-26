const mongoose=require('mongoose');
const User=mongoose.model('User');
const users=[];
exports.addNewUser=(req,res)=>{
    res.render('addUsers',{title:'Add User'})
}
exports.newUser = async (req, res) => {
    const user = await (new User(req.body)).save();
    users.push(user);
    res.redirect('/user');
};
exports.showUsers = async(req,res) => {
    const users=await User.find();
    res.render('userList',{ users });
};
exports.editUsers=async(req,res)=>{
    const user = await User.findOne({emailId: req.query.emailId});
    console.log(user);
    res.render('editUser', { title: `Edit ${user.name}`, user } );
};
exports.updateUser = async (req, res ) => {
    console.log("hiiiiii");
    User.findOneAndUpdate({ emailId: req.query.emailId }, req.body, {
        new: true,
        runValidators: true
        }).exec();
        console.log("user updated successfully");
        res.redirect('/user');
};
exports.deleteExistingUser =  (req, res ) => { 
    User.findOneAndRemove({ emailId: req.query.emailId }, function(err){
        if(err) console.log(err);
        console.log("user deleted successsfully");
        res.redirect('/user');
    }).exec();
};
exports.users;