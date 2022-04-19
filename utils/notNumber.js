const notNumber = (id, next) => {
  if (isNaN(Number(id)) || +id < 1) {
    let error = new Error("ID must be a positive integer");
    error.status = 400;
    next(error);
    return true;
  } else {
    return false;
  }
};

module.exports = notNumber;
