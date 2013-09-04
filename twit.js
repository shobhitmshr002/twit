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
    texto:    new Array(),
});
var util = require('util');

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
