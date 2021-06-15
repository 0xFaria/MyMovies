const knex = require("../../database/index")


class User {
  async create(user) {
    try {
      await knex.insert(user).table("users")
    }catch(err) {
      console.log(err)
    }
  }

  async findById(id) {
     let user = await knex("users").where({id: id})
     if(user) {
       return user
     }else {
       return false
     }
  }

  async findByEmail(email) {
    let user = await knex("users").where({email: email})
    if(user) {
      return user
    } else {
      return false
    }
  }

  async findUserMovies(id) {
    let movies = await knex.select("*").from("movies").where({user_id : id})
    return movies
  }
}

module.exports = new User()