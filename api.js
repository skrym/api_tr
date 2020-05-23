let express = require('express') //npm install express
let cors = require('cors') //npm install cors

let app = express()
app.use(cors())

const PORT = 3003

app.listen(PORT, function() {
  console.log(`Server is running on http://localhost:${PORT}`)
})

app.get('/me', function(request, response) {
  console.log('We have called "/me" route')
  response.send('Mykhailo')
})

