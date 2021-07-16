const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes
// create a todo
app.post("/todos", async(req,res) => {
    try {
        const { description } = req.body;
        
        const newTodo = await pool.query(
            "INSERT INTO TODO (DESCRIPTION) VALUES ($1) returning *", [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get
app.get("/todos", async(req,res) => {
    try {
        const getall = await pool.query(
            "Select * from todo");
            res.json(getall.rows);
    } catch (err) {
        console.error(err.message);
    }
}) ;

//get single
app.get("/todos/:id",async (req,res) =>{
    try {
        const {id} = req.params;
        const getSingle = await pool.query(
            "Select * from todo where todo_id = $1", [id]
        ) ;
        res.json(getSingle.rows[0]); 
    } catch (err) {
        console.error(err.message);
        
    }
});
//update
app.put("/todos/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {description} =  req.body;
        const updateSingle =  await pool.query(
            "update todo set description =  $1 where todo_id = $2", [description, id]
        )
        res.json("todo updated successfully");
    } catch (err) {
        console.error( err.message);
    }
});
//delete
app.delete("/todos/:id" , async (req,res) => {
    try {
        const {id} =  req.params;
        const delTodos = await pool.query(
            "delete from todo where todo_id = $1", [id]
        )
        res.json("Record deleted successfully");
    } catch (err) {
        console.error(err.message);
    }
});



app.listen(5000, () => {
    console.log("Server has been started on port 5000");
})