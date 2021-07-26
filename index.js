const http = require ('http')

http.createServer(
    (req,res)=>{
res.end("servidor funcionando")

    }).listen(3000,'localhost',() => console.log("o servidor ta rodando..") )