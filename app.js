/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 9/3/13                                                                  f
 * Time: 6:46 PM
 * To change this template use File | Settings | File Templates.
 */

var express = require('express');
var app = express();

var Twit = require('twit');
var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/test?auto_reconnect', {w: 1});

var T = new Twit({
    user_name: 'mshobhit002',
    consumer_key: 'm4h8SeqEe84r5jnuDIHEyw',
    consumer_secret: 'Ggrbgnx4RM58TcnZtnJtaM2aQBxmphtv9upN4qlVUfM',
    access_token: '178622205-TaoqcUBwIFDY4NA0N28k08e4UcSTtwlzOPrfJk0',
    access_token_secret: 'V052uI3tDOLLmEvfvUp60jx0rtca9Cn76rr5EV3Xtw'
})

/*T.post('statuses/update', { status: 'hello world!' }, function(err, reply) {
 //  ...
 })*/
//var stream = T.stream('statuses/filter', { track: 'india' })

//stream.on('tweet', function (tweet) {
//
//    db.collection("ids").insert({id: tweet.user.id, created_at: tweet.created_at}, function (e, r) {
//        if (e) throw e;
//        //console.log(tweet.user.id);
//
//    });
//
//
//    //console.log(tweet.user.id,tweet.created_at)
//
//});
//


 db.collection("ids").find({}).limit(10).toArray(function(err,result){
 if(err) throw err;
     for(var i=0;i<result.length;i++) {
         var twee = result[i];
         console.log(twee._id);
     }
 //console.log(result);
 });
/*var text =
 function parseTwitterDate(text) {
 return new Date(Date.parse(text.replace(/( +)/, ' UTC$1')));
 }*/


//var ObjectID = require('mongoskin').ObjectID;

//var idString = 'en';


/*
 app.get('/tweet/created_at', function (req, res) {
 console.log('enter here');
 db.collection("tweet").find().toArray(function (err, result) {
 if (err)throw err;
 console.log(result);
 });
 /*db.collection("tweet",function(err,collection){

 console.log(req.params.id);
 collection.findOne({created_at: req.params.id},function(err, doc) {
 if(err)throw err;
 console.log(doc);

 });*/


//app.listen(5000);