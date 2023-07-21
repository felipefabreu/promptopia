import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'Email already exists'],
  },
  username: {
    type: String,
    required: [true, 'Please provide a name'],
    match: [/^[a-zA-Z0-9]+$/, 'Please provide a valid name'],
  },
  image: String,
});

const User = models.User || model('User', userSchema);

export default User;
