import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  firstname: String,
  lastname: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
