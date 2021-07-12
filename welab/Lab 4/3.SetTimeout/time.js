function myFunc(arg) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var da = d.getDate();
  var mo = d.getMonth();
  var y = d.getFullYear();
  console.log("Date is  ", da, "/", mo, "/", y);
  console.log("Time is", h, "hrs", m, "min");
}

setTimeout(myFunc, 2000);
