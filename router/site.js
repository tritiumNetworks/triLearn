const path           = require('path').resolve()
const { renderFile } = require('ejs')

function siteRouter(app) {
  app.get('/', (req, res) => { renderFile(path + '/page/intro.ejs', { req }, (err, str) => { if (err) console.log(err); else res.send(str) }) })
  app.get('/login', (req, res) => { renderFile(path + '/page/login.ejs', { req }, (err, str) => { if (err) console.log(err); else res.send(str) }) })
}

module.exports = siteRouter