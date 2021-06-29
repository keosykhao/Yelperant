require("dotenv").config();
const express = require('express');
const morgan = require('morgan')
const db = require('./db')

// create an instance of an express
const app = express();

app.use(express.json())



// server is running on localhost
// get all restaurants
app.get("/api/v1/restaurants", async (req,res)=>{
    try {
        const results =  await db.query("select * from restaurants");
          
    console.log(results)
    res.status(200).json({
        status:"success",
        results: results.rows.length,
        data:{
            restaurants: results.rows
        }
    })
    } catch (err) {
        console.log(err);
    } 
});

// Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) =>{
    console.log(req.params);
    res.status(200).json({
        status:"success",
        data:{
            restaurant:["taki taki"]
        }
})
});
// create a restaurant
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req.body)
    res.status(201).json({
        status:"success",
        data:{
            restaurant:["tao"]
        }
    })
});

// update a restaurant
app.put("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status:"success",
        data:{
            restaurant:["mcdonalds", "zaxbys"]
        }
    })
});

// delete

app.delete("/api/v1/restaurants/:id", (req,res)=>{
    res.status(204).json({
        status:"success"
    })
})


// http:localhost/3002/restaurants
const port = process.env.PORT || 3001;


app.listen(port, ()=> {
    console.log(`server is up and listening on port ${port}`)
});


