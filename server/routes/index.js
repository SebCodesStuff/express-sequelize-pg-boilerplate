const homeController = require('../controllers/index')
const userController = require('../controllers/users')

module.exports = (app) => {
  app.get('/', homeController)
  app.get('/users', userController)
}
