const express = require("express")
const app = express()

const path = require("path")
const router = express.Router()

router.get("/homr", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(3333, ()=>{
    console.log("Servidor rodando!")
})