exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    //res.status(401).json({ msg: 'You are not authorized to view this resource' });
    console.log("User is not authenticated!");
    res.redirect('/register');
  }
}

exports.adminAuth = (req, res, next) => {
  if (req.user.role == 'Admin') {
    next();
  } else {
    res.status(403).json({ msg: 'You do not have the permission to view this resource' });
  }
}

exports.userAuth = (req, res, next) => {
  if (req.user.role == 'Admin' || req.user.role == 'User' ) {
    next();
  } else {
    res.status(403).json({ msg: 'You do not have the permission to view this resource' });
  }
}
