const { findUserMovies } = require("../models/User")
const User = require("../models/User")

class UserController {
  async create(req,res) {
    const {name, email, password, username } = req.body
    let user = {
      name,
      email,
      password,
      username
    }
    await User.create(user)
    res.json(user)
  }

  async findUserMovies(req,res) {
    let id= req.userId
    let movies = await User.findUserMovies(id)
    res.json(movies)
  }
}



module.exports = new UserController()