import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import servicesRouter from "./routes/ServicesRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());
app.use("/services", servicesRouter);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Instrek Technologies API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



