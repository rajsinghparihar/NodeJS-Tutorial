const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// this operation is the same as if else statement in
// website.js file.
// using node http server is not optimal for web app creation
// express makes it easier.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})