import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "finanças"

});


app.use(express.json());
app.use(cors());


/*app.get("/entrada", (req, res)=>{
    res.json("Oi, Este é o backend!")
})*/

app.get("/entrada", (req, res)=>{
    const q = "SELECT * FROM entrada"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/saídas", (req, res)=>{
    const q = "SELECT * FROM saídas"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
});