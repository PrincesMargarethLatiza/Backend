// import express from "express";
// import 'dotenv/config.js';
// import bookRoutes from './routers/BookRoutes.js';


// // /Create express app
// const app = express();

// //middleware to parse JSON request bodies
// app.use(express.json());

// //route to handle GET requests to the root URL
// try{
//     app.listen(process.env.PORT || 3000, () =>{
//         console.log(`Listening to port ${process.env.PORT || 3000}...`);
//     });
// }catch(e){
//     console.log(e);
// }

// app.use('/book', bookRoutes);

// // app.get("/pm", async (req, res) => {
// //     res.status(200).json({message: "Hello Im Princes Margareth"});
// //     // alternative way
// //     // res.send("Hello, World!");
// // });

// import express from "express";
// import 'dotenv/config.js';
// import bookRoutes from './routers/BookRoutes.js';
// import studentRoutes from "./routers/StudentRoutes.js";

import express from "express";
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';

// /Create express app
const app = express();

//middleware to parse JSON request bodies
app.use(express.json());

//route to handle GET requests to the root URL
try{  
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/student', studentRoutes);