/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 9/4/13
 * Time: 5:29 PM
 * To change this template use File | Settings | File Templates.
 */

var Twit = require('twit');
var mongo = require('mongoskin');
var db          = mongo.connect('mongodb://localhost:27017/tweets');
var tweetSchema = new db.Schema({
    texto:    new Array()
});
var util = require('util');

var T = new Twit({
    consumer_key:         'm4h8SeqEe84r5jnuDIHEyw'
    , consumer_secret:      'Ggrbgnx4RM58TcnZtnJtaM2aQBxmphtv9upN4qlVUfM'
    , access_token:         '178622205-TaoqcUBwIFDY4NA0N28k08e4UcSTtwlzOPrfJk0'
    , access_token_secret:  'V052uI3tDOLLmEvfvUp60jx0rtca9Cn76rr5EV3Xtw'
}) ;

Twitter.get('/statuses/user_timeline/5031024.json', {include_entities:true}, function(data) {
    var otro = new Array()
        ,   test = db.model('tweetin', tweetSchema);
    // iteration for all tweet in user id 37503675
    for (var i = 0; i < data.length; i++) {
        otro.push(util.inspect(data[i].text));
    };
    // create
    var testtest = new test({
        texto: otro
    });
    //save in mongo
    testtest.save(function (err) {if (err) console.log ('Error on save!')});
    //disconnected
    // with db.disconnect(); or without
});
