const { User } = require('../models/index');
const { comparePass } = require('../helpers/passHelp');

class UserController{
  static userRegister(req, res, next){
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image
    };

    User.create(newUser)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      console.log(err);
      next(err);
    })
  };

  static userLogin(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ where: { email }})
    .then(data => {
      const cekPassword = comparePass(password, data.password);
      if (cekPassword) {
        res.status(200).json({ name: data.name, email: data.email })
      } else {
        throw new Error()
      }
    })
    .catch(err => {
      console.log(err);
      next(err);
    })
  };
};

module.exports = UserController;