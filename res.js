"use strict"; //artinya kode ini akan dijalankan dg ketat

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  // res.status(200).json(values);
  res.json(data);
  res.end();
};
