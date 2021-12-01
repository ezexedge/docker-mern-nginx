import express from "express";
import cors from "cors";
import { readdirSync } from "fs";


const morgan = require("morgan");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: 'http://localhost:8080',
};
app.use(cors(corsOption));


const port = process.env.PORT || 8000;

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


app.listen(port, () => console.log(`Corriendo en el puerto ${port}`));