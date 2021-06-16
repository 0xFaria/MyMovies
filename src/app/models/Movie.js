const knex = require("../../database/index")

class Movie {
  async create(movie, userId) {
    try {
      await knex("movies").insert({
        id: movie.movieId,
        name: movie.movieName,
        overview: movie.movieOverview,
        image: movie.movieImage,
        user_id: userId
      })
      return movie
    } catch (error) {
      return false
    }
  }

  // async moviesByUser(userId) {
  //   try {
  //     const userMovies = await knex.select("*").from("movies").where({userId})
  //     return userMovies
  //   } catch (err) {
  //     console.log(err)
  //     return false
  //   }
  // }
}

module.exports = new Movie()