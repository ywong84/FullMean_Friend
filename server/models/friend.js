console.log('friends model');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var FriendSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: Date
},{timestamps: true});
mongoose.model('Friend', FriendSchema);
