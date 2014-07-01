

(function () {
// For Module Design Pattren

     var mongoose = require("mongoose");
    var async = require("async");

        var UriSting = 'mongodb://localhost/helloMongoose';//define database name
        console.log('Server started');


//to connect with data base
        mongoose.connect(UriSting, function (err) {
            if (err) console.log('Error Connection to db' + err); //if error
            else console.log('Connected sussefully');      // if connection done
        });
// to create schema like a TABLE (field name:data type );
        var userSchema = new mongoose.Schema({
            name: String, // for validation name:{type:String, } //*****check unique with Drop
            age: Number // age:{type:Number,min:18,max:30};
        });

        var newUsers = mongoose.model('users', userSchema); //collection name -to-mongooseSchema Relation

        var SampleUser = new newUsers({
            name: "Gaurav Gupta",
            age: 1111
        });//create a user of new user type

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//to insert data
        function inData(callback) {
            SampleUser.save(function (err) {
                if (err) console.log('Error in saving user' + err);
                //else console.log('User save sucessfully');
                callback(err,"User save sucessfully");

            })
        }//save sample user to db.users.insert(sampleUser) where sampleUser--> {name:"Mohit Kumar Tyagi",age:23};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// to select data...limit for range 0-all other for count

        function outData(callback) {
            newUsers.find({}).limit(0).exec(function (err, result) {
                if (err) console.log("Error inretriving data");
               // else console.log("data ::" + result);
                callback(err,result);

            });
        }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



    async.series([inData,outData], function (err, result) {

        if(err) console.log("Error inretriving data");
        else console.log("data ::"+result);


    });



})();