const R = require("ramda");
const moment = require("moment");
const RD = require("../utils/ramda-decimal");

const allBands = require("../config/ni");

const isDateOnOrAfter = R.curry((date, dateString) =>
  moment.utc(dateString, "YYYY-MM-DD").isSameOrBefore(date)
);

const noBandsError = (date) =>
  new Error(`National Insurance bands unavailable for date ${date}`);

const bandsOnDate = (date) => {
  const month = moment.utc(date, "YYYY-MM-DD");

  return R.compose(
    R.when(R.isNil, () => {
      throw noBandsError(date);
    }),
    R.prop("bands"),
    R.last,
    R.filter(R.propSatisfies(isDateOnOrAfter(month), "startDate"))
  )(allBands);
};

// TODO this should do more than return the number it's given
const slice = R.curry((floor, ceiling, num) => {
  // parsed numbers
  const parsedFloor = parseFloat(floor);
  const parsedCeiling = parseFloat(ceiling);
  const parsedNum = parseFloat(num);

  // if we are in the band then we want to subtract our
  // income from the floor of the band to then be multiplied by
  // the rate
  if (parsedNum > parsedFloor && parsedNum <= parsedCeiling) {
    return RD.decimal(num - floor);
  }

  // if we are above the ceiling of the band we want to
  // multiply the full difference between the ceiling and the floor
  // by the rate
  if (parsedNum > parsedCeiling) {
    return RD.decimal(ceiling - floor);
  }

  return RD.decimal(0);
});

const calcForBand = R.curry((income, { floor, ceiling, rate }) =>
  RD.multiply(slice(floor, ceiling, income), rate)
);

module.exports = (runDate) => {
  const bands = bandsOnDate(runDate || moment.utc());
  return R.compose(RD.sum, R.flip(R.map)(bands), calcForBand);
};

// for unit tests
module.exports.bandsOnDate = bandsOnDate;
module.exports.slice = slice;
