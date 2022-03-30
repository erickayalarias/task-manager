const express = require("express")
const tasks = require("./routes/task")
const app = express()
const connectDB = require("./db/dbConnect")
require("dotenv").config()

//midleWare
app.use(express.json())
app.use(express.static("./public"))
// we wont have the data in read docby

// Routes

app.use("/api/v1/tasks", tasks)

const port = proccess.env.PORT || 5000
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()