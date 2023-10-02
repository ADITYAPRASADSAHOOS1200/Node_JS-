const http=require("http");

const server=http.createServer((req,res)=>{
   if(req.url=="/"){
    res.write("<h1> i ama happy to learn full stack development")
   }
   else{
    res.end();
   }

});
server.listen(5002);
console.log(`The HTTP Server is running on port 5002`);