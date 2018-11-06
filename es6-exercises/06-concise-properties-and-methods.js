// Fill in the following function with a single object literal with the format
// {make: "honda", model: "civic", drive: Function}, where the drive function
// logs "vroom" to the console

function car(make, model, drive){
  return {
    make,
    model,
    drive: function() {
      console.log('vroom');
    }
  }
}

let auto = car("honda","civic")
// returns {make: "honda", model: "civic", drive: Function}
auto.drive()
// logs "vroom" to the console
