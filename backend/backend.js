const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    database:"college",
})

app.post("/login",(req,res)=>{
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?"
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err,data)=>{
        if(err) return res.json("Login Failed")
        if(data.length > 0){
            return res.json("Login Successful")
        }else{
            return res.json("No Record")
        }
    })
})

app.listen(3000,()=>{
    console.log(`Server running on port ${port}`)
})