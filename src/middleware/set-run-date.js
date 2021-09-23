module.exports = (req, res, next) => {
  const runDate = req.headers["x-run-date"];

  if (runDate && typeof runDate !== "string") {
    return next(new Error("Please provide x-run-date as a string"));
  }

  req.runDate = runDate;
  return next();
};
