const express = require("express");
const cors = require("cors");
const { login, authenticate } = require("./controller/auth");

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/login', login)
app.post('/api/authenticate', authenticate)

app.listen(4000, () => console.log("up on 4000"))