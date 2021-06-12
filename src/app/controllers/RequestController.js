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
}

module.exports = new RequestController()