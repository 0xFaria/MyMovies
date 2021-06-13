const jwt = require("jsonwebtoken")
const { promisify }  = require("util")
 
export default function async(req,res,next) {
  let authHeader = req.headers.authorization 
  if(!authHeader) {
    res.json({error: "Token não identificado"})
  }

  const [, token] = authHeader.split(" ")
  let decoded = await promisify(jwt.verify)(token, "mymovies")
  try {
    req.userId = decoded.id
    return next()
  } catch(err) {
    res.status(401).json({err: "Token invalido"})
  }
}