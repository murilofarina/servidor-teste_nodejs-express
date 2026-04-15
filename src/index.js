const express = require("express")
const app = express()

const path = require("path")
const router = express.Router()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "pages")))

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/teste", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/enviaDados.html"))
})

router.post("/enviar", (req, res)=>{
    console.log("Dados recebidos:", req.body)
    res.json({
        sucesso: true,
        mensagem: "Dados recebidos com sucesso!"
    })
})

app.use(router)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}!`)
})