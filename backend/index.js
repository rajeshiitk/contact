import  express  from "express";

const App = express();


App.get("/contact",(req,res)=>{
    console.log("hi");
})



App.listen(5172,()=>{
    console.log("server is working");
})