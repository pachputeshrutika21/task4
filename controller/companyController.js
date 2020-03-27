const mongoose=require('mongoose');
const User=mongoose.model('User');
const Company=mongoose.model('Company');
exports.addNewCompany=async(req,res)=>{
    const user=await User.findOne({emailId:req.body.emailId});
    const useEmailId=await Company.findOne({ emailId: req.body.emailId });
    const useCompanyName=await Company.findOne({ company_name: req.body.company_name });
    if (!useCompanyName)
    {
        if (!useEmailId) 
        {
            if(user)
            {
                const company = await (new Company(req.body)).save();
                console.log(` ${company.company_name} added in ${user.name}`);
                res.redirect('/company');
            } 
            else 
            {
                console.log("User are not available in this EmailID");
            }
        } 
        else 
        {
            console.log("EmailId are already used to user and company name")
        }
    } 
    else 
    {
        console.log('company name are already used');
    }
};
exports.listOfCompany= async ( req, res ) => {
    const company = await Company.find();
    res.send(company);
};
exports.detailsOfCompany= async ( req, res ) => {
    const company = await Company.findOne({companyName: req.params.company_name});
    res.send(company);
    console.log(company);
};
exports.updateCompany = async (req, res) => {
    console.log(req.body.company_name);
    const company=Company.findOneAndUpdate({ company_name: req.params.company_name}, {company_name: req.body.company_name},{new:true,runValidators:true}).exec();
        console.log("company updated successfully");
        console.log(company);
        res.send(company);
}
exports.userAndCompanyDeleted= async ( req, res ) => {
    const company = await Company.findOne({companyName: req.params.company_name});
    console.log(company);
        if(!company){
            console.log("company are already deleted");
        }
        else{
        Company.findOneAndDelete({ companyName: req.params.company_name }, function(err){
            if(err) console.log(err);
            console.log(`comapany deleted`);
        }).exec();
        User.findOneAndDelete({ email:company.emailId }, function(err){
            if(err) console.log(err);
            else{
                console.log(`user deleted`);
                res.redirect('/company');
            }
        }).exec();
    }
};