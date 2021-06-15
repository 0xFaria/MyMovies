const express = require("express")
const RequestController = require("./app/controllers/RequestController")
const UserController = require("./app/controllers/UserController")
const SessionController = require("./app/controllers/SessionController")
const auth = require("./app/middlewares/auth")

const app = express()

app.use(express.json())

app.get("/",(req,res)=> {
  res.json({})
})

// Criar conta
app.post("/user/create", UserController.create)
// Logar e gerar sessão
app.post("/session/create", SessionController.store)
// app.post("/movie/:id/create")
// Filme por Id
app.use(auth)
// Adicionar filme específico
app.get("/movie", RequestController.addById)
// Consulta a API
app.get("/search",RequestController.basicSearch)

app.listen(3333,()=> {
  console.log("Server running")
})