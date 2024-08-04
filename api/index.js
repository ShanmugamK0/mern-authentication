import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
	console.log('database connected successfully');
}).catch((error) => {
	console.log(error);
})

const app = express();

app.listen(8000, () => {
	console.log('server is running on port 3000!');
})