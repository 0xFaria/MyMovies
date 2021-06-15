const jwt = require("jsonwebtoken")

const User = require("../models/User")

class SessionController {
  async store(req,res) {
    let {email, password} = req.body
    const results = await User.findByEmail(email)
    // Verifico se encontrei com esse email
    if(results.length <= 0 ) {
      return res.status(401).json({err: "Usuário não encontrado"})
    }

    let user = results[0]
    // Verifico se senhas batem
    if(user.password !== password) {
      return res.status(401).json({err: "Senhas nao batem"})
    }

    let {id,name,username} = user
    // Retorno pro front o token gerado e as informações desse usuário
    res.json({
      user: {
        id,
        name,
        username
      },
      token: jwt.sign({id}, "mymovies", {expiresIn: "7d"})
    })
    
  }
}

module.exports = new SessionController()