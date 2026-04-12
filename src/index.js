const express = require("express")
const app = express()

const path = require("path")
const router = express.Router()

const PORT = process.env.PORT || 3000

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(PORT, ()=>{
    console.log("Servidor rodando!")
})