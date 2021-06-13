const express = require("express")
const RequestController = require("./app/controllers/RequestController")
const UserController = require("./app/controllers/UserController")

const app = express()

app.use(express.json())

app.get("/",(req,res)=> {
  res.json({})
})

app.post("/user/create", UserController.create)

// app.post("/movie/:id/create")
// Filme por Id
app.get("/movie", RequestController.searchById)
// Consulta a API
app.get("/search",RequestController.basicSearch)

app.listen(3333,()=> {
  console.log("Server running")
})