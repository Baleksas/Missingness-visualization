const prepareData = (d) => {
  let jsonStringified = JSON.stringify(d);

  dimensions = Object.keys(d);

  for (let i = 0; i < dimensions.length; i++) {
    console.log(dimensions[i]);
    if (i !== dimensions.length - 1) {
      d[dimensions[i]] = Math.round(d[dimensions[i]] * 100) / 100;
    }
  }
  jsonStringified = jsonStringified.replace(/{/g, "");
  jsonStringified = jsonStringified.replace(/}/g, "");
  jsonStringified = jsonStringified.replace(/"/g, "");
  jsonStringified = jsonStringified.replace(/,/g, ", ");

  return jsonStringified;
};
