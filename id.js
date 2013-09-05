/**
 * Created with JetBrains WebStorm.
 * User: manusis
 * Date: 9/5/13
 * Time: 4:08 PM
 * To change this template use File | Settings | File Templates.
 */

var ObjectID = require('mongodb').ObjectID;

var idString = '4e4e1638c85e808431000003';
collection.findOne({_id: new ObjectID(idString)}, console.log)
