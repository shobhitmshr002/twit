/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 9/4/13
 * Time: 5:12 PM
 * To change this template use File | Settings | File Templates.
 */


var Twit = require('twit');
var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/test?auto_reconnect');

var T = new Twit({
    consumer_key:         'm4h8SeqEe84r5jnuDIHEyw'
    , consumer_secret:      'Ggrbgnx4RM58TcnZtnJtaM2aQBxmphtv9upN4qlVUfM'
    , access_token:         '178622205-TaoqcUBwIFDY4NA0N28k08e4UcSTtwlzOPrfJk0'
    , access_token_secret:  'V052uI3tDOLLmEvfvUp60jx0rtca9Cn76rr5EV3Xtw'
})

/*T.post('statuses/update', { status: 'hello world!' }, function(err, reply) {
 //  ...
 })*/
var stream = T.stream('statuses/filter', { track: 'india' })

stream.on('tweet', function (tweet) {

    db.collection("tweet").insert(tweet,function(){
    })
});

    db.collection("tweet").find().toArray(function(err,items){
        var s=items[0].created_at;
        console.dir(s);
    });




