const server = require("http")
server.createServer((req,res) =>{

    if(req.url==='/'){
    res.write("this is a first server")
    }
    else if(req.url==='/about'){
        res.write("this is about page")
    }
    else if(req.url==='/contact'){
        res.write("this is contact page")
    }
    else{
        res.write("error")
    }
    res.end("")}
).listen(4000,()=>{
    console.log("server started")
})
