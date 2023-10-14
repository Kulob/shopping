import express from "express";
import multer from "multer";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRouter from './routes/auth.js'

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://shopping:qwdR58nnq97tPGlw@shopping.m8e2mft.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));


app.use('/api/auth',authRouter)
app.use('/', (req,res) => {
  res.send('Server is running')
});

app.listen(5002, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
