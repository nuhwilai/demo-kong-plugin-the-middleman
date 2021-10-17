exports.printAll = function (name, req) {
  console.log("===================================");
  console.log(new Date(), "print from", name);
  console.log("------ headers ------");
  console.log(req.headers);
  console.log("------ query --------");
  console.log(req.query);
  console.log("------ params --------");
  console.log(req.params);
  console.log("------ req.body--------");
  console.log(req.body);
  console.log("===================================");
};
