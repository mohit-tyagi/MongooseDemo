(function() { //Module design pattern

    var mongoose = require("mongoose");
    var UriSting = 'mongodb://localhost/Intelligrape';//define database name
    console.log('Server started');


//to connect with data base

    mongoose.connect(UriSting, function (err) {
        if (err) console.log('Error Connection to db' + err); //if error
        else console.log('Connected sussefully');      // if connection done
    });


// to create schema like a TABLE (field name:data type );
    var Person = new mongoose.Schema({
        EmpID: Number,
        name: String,
        age: Number,
        address: String,
        job: String,
        sal: Number
    });

    var Employee = mongoose.model('emp', Person); //collection name -to-mongooseSchema Relation

    var EMP1 = new Employee({
        EmpID: 1001,
        name: "Mohit kumar Tyagi",
        age: 23,
        address: "sec 12 Noida",
        job: "Software Developer ",
        sal: 85000
    });//create a Employee of Person type

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//to insert data
    /*

     EMP1.save(function(err){
     if (err) console.log('Error in saving user'+err);
     else console.log('User save sucessfully');
     })  //save sample EMP! to database
     */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// to select data...limit for range 0-all other for count

    Employee.find({}).limit(0).exec(function(err,result){
     if(err) console.log("Error in retriving data");
     else console.log("data ::"+result);
     });

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