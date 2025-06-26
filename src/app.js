const express = require("express");

const app = express();

// app.use("/hello",(req,res) => {
//     res.send("hello kaise ho bhai");
// });

// This will only handle GET cal to /user
// app.get("/user", (req,res) =>{
//     res.send({firstName: "Prince", College: "MSIT"});

// })

app.post("/user", (req,res) =>{
   // Save Data to the database
    res.send("Data saved successfully to the database");
});

// app.delete("/user", (req,res) =>{
//     //Delete Data from the database
//     res.send("Data deleted successfully from the database");
// });


// This will match all the HTTP method API calls to /test
app.use("/test",(req,res,next) => {
    // res.send("hello from the server");
    console.log("Handling the route test");
    res.send("1st Response");
    next();
},
(req,res)=> {
    console.log("Handling the second route 2!!");
    res.send("2nd Response");
}
);

app.listen(3000, () => {
    console.log("Server is running on port 3000");  
});   