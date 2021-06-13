const jwt = require("jsonwebtoken")
const User = require("../models/User")

const User = require("../models/User")

class SessionController {
  async store(req,res) {
    let {email, password} = req.body
    const results = await knex.select("*").from('users').where({email: email})

    if(results.length <= 0 ) {
      res.json({err: "Usuário não encontrado"})
    }

    let user = results[0]

    if(user.password === password) {
      res.json(user,
        jwt.sign({id}, "mymovies", "7d")
        )
    }
  }
}