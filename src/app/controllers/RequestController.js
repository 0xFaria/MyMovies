const { default: axios } = require("axios")
const apiConfig = require("../../../config/request")

class RequestController {
  // constructor() {
  //   this.API_KEY = apiConfig.API_KEY,
  //   this.BASE_URL = apiConfig.BASE_URL
  // }

  async basicSearch(req,res) {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.API_KEY}&language=pt-BR&query=${req.query.movie}&include_adult=false`)
    const searchData = search.data.results
    res.json(searchData)
  }

  async searchById(req,res) {
    //Recebido via get
    let movieId = req.query.movieId
    try {
      const search = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiConfig.API_KEY}&language=en-US&include_adult=false`)
    res.json(search.data)
    } catch(err) {
      console.log(err)
    }
    
  }
}

module.exports = new RequestController()