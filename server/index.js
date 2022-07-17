const express = require("express");
const cors = require("cors");
const {getCompliment, getFortune, addComp, deleteComp} = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
// app.post('/api/movies', addFort);
app.post('/api/comps', addComp);

app.listen(4000, () => console.log("Server jamming on 4000"));
