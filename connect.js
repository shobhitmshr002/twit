/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 9/4/13
 * Time: 5:46 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongoskin');
mongo.db('localhost:27017/testdb').collection('blog').find().toArray(function (err, items) {
    console.dir(items);
})
