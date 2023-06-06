const jwt = require('jsonwebtoken')

const createToken = (info) => {
  return jwt.sign(
    {
      username: info.username,
      password: info.password
    },
    "ILOVESQUATS", // This is usually an ENV var...
    {
      expiresIn: 'never'
    }
  )
}

module.exports = {
  login: async (req, res) => {
    try {
      const {username, password} = req.body
      let token = createToken({username, password})
      res.status(200).send(token)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  authenticate: async (req, res) => {
    try {
      const {token} = req.body
      jwt.verify(token, "ILOVESQUATS")
      res.status(200).send("It is verified :)")
    } catch (error) {
      res.status(400).send(error)
    }
  }
}