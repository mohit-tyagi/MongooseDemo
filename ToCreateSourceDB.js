(function() { //Module design pattern

    var mongoose = require("mongoose");
    var UriSting = 'mongodb://localhost/SourceDB';//define database name
    console.log('Server started');

    var db = mongoose.createConnection(UriSting);



    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// to create schema like a TABLE (field name:data type );
    var CampanySchema = new mongoose.Schema({
        ID: Number,
        name: String,
        Adders: String

    });
    var Compnay = db.model('company', CampanySchema); //collection name -to-mongooseSchema Relation



    var MyCompany = new Compnay({
        ID:50,
        name: "hcl.",
        Addrass: "pune"
    });//create a MyCompany  of compnay type


    //to insert data

    MyCompany.save(function(err){
     if (err) console.log('Error in saving user'+err);
     else console.log('User save sucessfully');
     })  //save sample EMP! to database

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// to create schema like a TABLE (field name:data type );
 /*   var UserSechema = new mongoose.Schema({
        EmpID: Number,
        name: String,
        age: Number

    });

    var user = db.model('user', UserSechema); //collection name -to-mongooseSchema Relation

    var MyUser = new user({
        EmpID: 1010,
        name: "Rajiv",
        age: 27
    });//create a Employee of Person type
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//to insert data
/*

    MyUser.save(function(err){
     if (err) console.log('Error in saving user'+err);
     else console.log('User save sucessfully');
     })  //save sample EMP! to database
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// to select data...limit for range 0-all other for count

   /* user.find({}).limit(0).exec(function(err,result){
        if(err) console.log("Error in retriving data");
        else console.log("data ::"+result);
    });*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//to update record
    /*Employee.update({age:23},{sal:55000},{multi:false},function(err,result){
     if(err) console.log("error is :"+err);
     else console.log('result updated :'+result);
     });*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// To Delete Record

    /*
     Employee.remove( { age: { $gt: 22 } },function(err,result){
     if (err) console.log('Error in deleting '+err);
     else console.log('No. of record deleted sucessfully::'+result)
     });
     */

})();