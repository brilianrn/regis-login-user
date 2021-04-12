const { Admin } = require('../models');
const { comparePass } = require('../helpers/passHelp');

class AdminController{
  static login(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    Admin.findOne({ where: { email }})
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

module.exports = AdminController;