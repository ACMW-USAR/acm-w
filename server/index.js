import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8080;

//connection with the database
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "acmw_backend"
})

//api to post the data from frontend register section to the backend database
app.get('/',(req,res)=>{
    return res.status(200).json({"message" : "welcome to our server"})
})
app.post('/create',(req,res)=>{
    console.log(req.body);
    const sql = "INSERT INTO registration (Fullname, Email, Year, Branch) VALUES (?,?,?,?)";
    const values = [
        req.body.fullname,
        req.body.email,
        req.body.year,
        req.body.branch
    ];
    db.query(sql,values,(err,data)=>{
        if(err){
            return res.json({Error : "Error"})
        }
        return res.json(data)
    })
})

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
})
