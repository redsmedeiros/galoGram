require('dotenv').config()
//importar framework
const express = require('express')
//importar path para diretorios de img
const path = require('path')
//para resolver problema de cors
const cors = require('cors')
//definir a porta
const port = process.env.PORT
//inicializar a aplicação
const app = express()
//configurar receber resposta em JSON e Formdata
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//resolver cors
app.use(cors({credentials: true, origin:"http://localhost:3000"}))
//diretorio de imgs
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
//chamar o arquivo de rotas
const router = require('./routes/Router.js')
app.use(router)
//inicializar a aplicação
app.listen(port, ()=>{
    console.log('ta rodando seu FILHA DA PUTA ARROMBADO')
})