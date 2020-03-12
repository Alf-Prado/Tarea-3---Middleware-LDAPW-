// Importa el modelo de productos
let UserModel = require('../models/User')

exports.index = (req, res) => {
    let user = req.user;
    UserModel.showAll()
    .then((data) => {
      // Se guardan los usuarios
      let users = data;
      // Se envía la información
        res.render('admin/users', {user: user, users: users});
    });
  }
