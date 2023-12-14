const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
const dB = require('./Middlewares/dB');

dB.connectToDb();
const userData = require('./model/usermodule.js');

const routes = require("./Routes/userroutes");
app.use("/",routes);


app.listen(5000,()=>{
    console.log(`server is statred on 5000`);
})



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const url = "mongodb+srv://nitin0969be21:mRdE5UyeDgq6n2We@cluster0.0eckoha.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// create a api

// const router = require('./Routes/userroutes');
// app.use('/',router)
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })
// app.get('/home',(req,res)=>{
//     res.send('Hello I am home page');
// })

// app.get('/contact',(req,res)=>{
//     res.send('Hello I am contact page');
// })
// app.get('/error',(req,res)=>{
//     res.send('404 error found');
// })
// app.post('/hello',async (req,res)=>{
//     const inputdata = req.body;
//     console.log('inputdata',inputdata);

//     res.json(inputdata);    
// }


