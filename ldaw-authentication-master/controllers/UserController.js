// Importa el modelo de productos
let UserModel = require('../models/User')

exports.index = (req, res) => {
    let user = req.user;
    UserModel.showAll()
    .then((data) => {
      // Guardamos los productos en una variable
      let users = data;
      // Enviamos los datos a la vista
        res.render('admin/users', {user: user, users: users});
    });
  }
