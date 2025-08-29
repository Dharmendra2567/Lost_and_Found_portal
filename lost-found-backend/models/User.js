const mongoosegoose = require('mongoose');

const UserSchema = new mongoosegoose.Schema({
  username: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, 
        default: 0
    }// 0 - regular user, 1 - admin
}, { timestamps: true });


module.exports = { User: mongoosegoose.model('User', UserSchema) };