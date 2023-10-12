import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, //обезательний
    },
    email: {
      type: String,
      required: true,
      unique: true, //уникальный
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true, //дата создание
  },
);

export default mongoose.model('User', UserSchema);
