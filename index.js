var EColor;
(function (EColor) {
    EColor[EColor["Red"] = 0] = "Red";
    EColor["Black"] = "black";
    EColor["Blue"] = "blue";
    EColor["Grey"] = "grey";
})(EColor || (EColor = {}));
console.log((function () {
    return {
        make: 'Make',
        model: 'model',
        year: 2005,
        colors: [EColor.Black, EColor.Red]
    };
})());
