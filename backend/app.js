//importar framework
const express = require('express')
//importar path para diretorios de img
const path = require('path')
//para resolver problema de cors
const cors = require('cors')
//definir a porta
const port = 5000
//inicializar a aplicação
const app = express()
//configurar receber resposta em JSON e Formdata
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//inicializar a aplicação
app.listen(port, ()=>{
    console.log('ta rodando seu FILHA DA PUTA ARROMBADO')
})