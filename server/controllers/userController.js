const { User } = require('../models/index');
const { comparePass } = require('../helpers/passHelp');

class UserController{
  static getUsers(req, res, next){
    User.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next(err);
    })
  };

  static getUser(req, res, next){
    User.findByPk(+req.params.id)
    .then(data => {
      res.status(200).json({
        name: data.name,
        email: data.email,
        image: data.image
      });
    })
    .catch(err => {
      next(err);
    })
  }

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
        res.status(200).json({ name: data.name, email: data.email, image: data.image })
      } else {
        throw new Error({ name: 'loginFail' })
      }
    })
    .catch(_ => {
      next({ name: 'loginFail' });
    })
  };
};

module.exports = UserController;