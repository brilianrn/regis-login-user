function errHandler(err, req, res, next) {
  if (err.name === 'loginFail') {
    res.status(400).json({ message: 'Invalid email/ password' });
  } else {
    res.status(500).json({ message: 'Internal Server Error' ,err });
  }
}

module.exports = errHandler;