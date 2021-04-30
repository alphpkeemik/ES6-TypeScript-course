var carFactory = function (make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    };
};
var car1 = carFactory('Form', 'focus', 2006);
//console.log(car1)
var getCarInfo = function (car) {
    var make = car.make, model = car.model, year = car.year;
    return "This " + make + " " + model + " was manufactured in " + year;
};
console.log(getCarInfo(car1));
