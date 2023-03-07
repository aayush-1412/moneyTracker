import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/transaction-routes.js";
import path from "path"
import cors from "cors"
import dotenv from "dotenv"
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();
app.use("/api/user",router);
app.use("/api/transaction",blogRouter)

app.use(express.static(path.join(__dirname,'./client/dist')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

const PORT=process.env.PORT || 6969
app.listen(PORT, () => {
  console.log("Backend Connected");
});
