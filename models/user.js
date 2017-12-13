var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	

	
	name: {
		type: String
	},
	email: {
		type: String
	},
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},

});

var User = module.exports = mongoose.model('User', UserSchema);

// module.exports.createAdmin= function(newAdmin, callback){
// 	newAdmin.save(callback);
//   }


  module.exports.createAdmin = function (newAdmin, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(newAdmin.password, salt, function (err, hash) {
			newAdmin.password = hash;
			newAdmin.save(callback);
		});
	});
}
  
// module.exports.createUser = function (newUser, callback) {
// 	bcrypt.genSalt(10, function (err, salt) {
// 		bcrypt.hash(newUser.password, salt, function (err, hash) {
// 			newUser.password = hash;
// 			newUser.save(callback);
// 		});
// 	});
// }

module.exports.getUserByUsername = function (username, callback) {
	var query = { username: username }
	User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
}
