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

  function myFunc1()
  {
      var d = new Date();
      console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
  }
  
  setTimeout(myFunc, 2000);
  setInterval(myFunc1,1000);