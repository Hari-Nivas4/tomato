import express from "express";
import cors from "cors"
import { connectDB } from "./config/dp.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import 'dotenv/config'


// app config
const app = express();
const port = 4000;
connectDB();
//middleware
app.use(express.json());
app.use(cors());
//api endpoint
app.use('/api/food' , foodRouter)
app.use('/api/user',userRouter);
app.use("/image",express.static('uploads'))
app.get("/",(req,res)=>{
    res.send("api working");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})
