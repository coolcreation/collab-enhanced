import mongoose from 'mongoose';

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('Contact', userSchema);

export default User;