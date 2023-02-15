'use strict';

const validator = (req, res, next) => {
  const name = req.query.name;

  if (!name) {
    next('ERROR...No Name');
  }
  next();
};

module.exports = validator;