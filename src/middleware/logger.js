'use strict';

const logger = (req, res, next) => {
  console.log(`Log info: \n ${req.path}, \n ${req.method}`);
  next();
};

module.exports = logger;