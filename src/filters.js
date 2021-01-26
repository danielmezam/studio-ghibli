const stringFilter = value => {
  if (value.length < 250) {
    return value;
  } else {
    return value.substring(0, 250).concat("...");
  }
};

export { stringFilter };
