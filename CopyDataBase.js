var mongoose = require('mongoose');
var URISource = 'mongodb://localhost/Intelligrape';
var URIDestination = "mongodb://localhost/copydb"
console.log("Node js server started.....");

var db = mongoose.createConnection(URISource);
var db1 = mongoose.createConnection(URIDestination);

// to create schema like a TABLE (field name:data type );


var Person = new mongoose.Schema({
    EmpID: Number,
    name: String,
    age: Number,
    address: String,
    job: String,
    sal: Number
});

var employee = db.model('emp', Person);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//To check data is read or not
/*
employeeModel.find({}).limit(0).exec(function(err,result){
    if(err) console.log("Error in retriving data");
    else console.log("data ::"+result);
});*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//copy database



var employeeCopy = db1.model('emp', Person);

employee.find({}).exec(function (err, u) {
    for (var i = 0; i < u.length; i++) {
        var emp1 = new employeeCopy(u[i]);
        emp1.save(function (err) {
            if (err) {
                console.log("there is some error while copying database: " + err);
            } else {
                console.log("Record copied successfully");
            }
        });
    }
});




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

