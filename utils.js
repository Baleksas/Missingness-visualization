const prepareData = (d) => {
  let jsonStringified = JSON.stringify(d);
  jsonStringified = jsonStringified.replace(/{/g, "");
  jsonStringified = jsonStringified.replace(/}/g, "");
  jsonStringified = jsonStringified.replace(/"/g, "");
  jsonStringified = jsonStringified.replace(/,/g, ", ");

  return jsonStringified;
};
