const { Router } = require('express');
const setIncome = require('../../../middleware/set-income');
const calculateNI = require('../../../middleware/calculate-ni');
const setRunDate = require('../../../middleware/set-run-date');

module.exports = () => {
  const api = Router();

  api.post(
    '/national-insurance',
    setIncome,
    setRunDate,
    calculateNI,
  );

  return api;
};