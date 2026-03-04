import express from 'express'
const app = express()

app.use(express.json());

function middleware(req,res,next){
    console.log("middleware called")
    next()
}
app.use(middleware)

app.get("/",(req,res)=>{
    res.send("/home route")
})

app.get("/about",(req,res)=>{
    res.send("/about route")
})

/* function middleware(req,res,next){
    console.log("middleware called")
    next()
}

app.get("/about", middleware, (req,res)=>{
    res.send("/about route")
}) */


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})

app.get("/shop/:id",(req,res)=>{
    res.send("/shop route")
})

//send, json, sendfile, end

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
}) 
    
app.get("/",(req,res)=>{
    res.redirect("/about")
})
app.get("/about",(req,res)=>{
    res.send("About page")
})
app.get("/about",(req,res)=>{
    res.statusCode = 400
     res.send("About page")
})

