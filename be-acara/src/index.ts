import express from "express";
import route from "./routes/api";

const app = express();

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})