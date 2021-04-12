const bcrypt = require('bcryptjs');

function hashPass(inputPass) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('' + inputPass, salt);

  return hash;
}

function comparePass(inputPass, PassDb) {
  return bcrypt.compareSync(inputPass, PassDb);
}

module.exports = { hashPass, comparePass };