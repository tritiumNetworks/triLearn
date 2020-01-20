const PORT = process.env.triLearnPort || 8080

const cors        = require('cors')
const path        = require('path').resolve()
const express     = require('express')
const siteRouter  = require(path + '/router/site')
const oauthRouter = require(path + '/router/oauth')

const app = express()
app.use(cors())
app.use('/src', express.static(path + '/src'))

siteRouter(app)
oauthRouter(app)

app.listen(PORT, () => { console.log('TriLearn Server is now on http://localhost:' + PORT) })
