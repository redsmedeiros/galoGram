//importar express
const express = require('express')
//do express chamar o router
const router = express()

//rota de teste
router.get('/', (req, res)=>{
    res.send('ta rodando no seu cu')
})

//exportar o router
module.exports = router