import express from "express";

//Create express app
const app = express();

//middleware to parse JSON request bodies
app.use(express.json());

const PORT = 3045;

//route to handle GET requests to the root URL
try{
    app.listen(PORT, ()=>{
        console.log(`Listening to port 3045...`);
    });
}catch(e){
    console.log(e);
}

app.get("/pm", async (req, res) => {
    res.status(200).json({message: "Hello Im Princes Margareth"});
    // alternative way
    // res.send("Hello, World!");
});