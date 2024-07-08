import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

const uri =
	"mongodb+srv://Christi321:calayag123@cluster0.u209iue.mongodb.net/food";

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
}
connect();

app.listen(8081, (req, res) => {
	console.log("listening to port 8081");
});