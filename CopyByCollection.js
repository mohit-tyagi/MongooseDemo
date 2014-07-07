var mongoose = require('mongoose');
var async=require('async');
var URISource = 'mongodb://localhost/SourceDB';
var URIDestination = "mongodb://localhost/DestinationDB"
console.log("Node js server started.....");

//var db = mongoose.createConnection(URISource);

var db1 = mongoose.createConnection(URIDestination);


mongoose.connect(URISource, function (err) {
    if (err) console.log('Error Connection to db' + err); //if error
    //else console.log('Connected sussefully');      // if connection done
});


var UserSechema = new mongoose.Schema({
    EmpID: Number,
    name: String,
    age: Number

});


var CampanySchema = new mongoose.Schema({
    ID: Number,
    name: String,
    Adders: String

});

var user = mongoose.model('user', UserSechema); //collection name -to-mongooseSchema Relation
var Company = mongoose.model('company', CampanySchema); //collection name -to-mongooseSchema Relation



var organization = db1.model('organigation', CampanySchema); //collection name -to-mongooseSchema Relation
var person = db1.model('person', UserSechema);
var subTask=[];



function copyOne(Source, Destination, cb) {

    Source.find({}).exec(function (err, u) {

        var Task = [];
        for (var i = 0; i < u.length; i++) {
            Task.push((function (sn) {
                return function (callback) {
                    new Destination(sn).save(function (err) {
                        if (err) {
                            callback(err)
                            return
                        }
                       // console.log(sn);
                        callback();
                    })
                }
            })(u[i]))
        }
        //console.log(Task);
        async.series(Task,
            function (err) {
                if (err)
                cb(err,null);
                    //console.log("error in copy::" + err);
                else
                cb(null,"Data Copied");
                    //console.log("database copied");
            });

    });
}


async.parallel(
    [function (callback){copyOne(user, person,callback) },
        function(callback){copyOne(Company, organization,callback)}],
    function(err,res){
    if(err)console.log("ERROR::"+err);
    else console.log(" "+res);

    mongoose.disconnect(function(err){
        if(err)console.log("ERROR WHILE CLOSE CONNECTION ::"+err);
        else console.log("Connection Close Properly");

    });

});
