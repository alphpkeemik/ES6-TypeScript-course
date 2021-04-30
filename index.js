var carFactory = function (make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    };
};
var myCarFactory = function (make, model, year) {
    return {
        make: make,
        model: model,
        year: year + 1
    };
};
var car1 = carFactory('Form', 'focus', 2006);
var car2 = myCarFactory('Form', 'focus', 2006);
console.log(car1, car2);
var printVehicleInfo = function (vehicle) {
    var make = vehicle.make, model = vehicle.model, year = vehicle.year;
    return "This " + make + " " + model + " was manufactured in " + year;
};
console.log(printVehicleInfo({
    model: 'model'
}));
