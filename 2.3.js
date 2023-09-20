const pi = 3.14;
function Circle_Area(radius) {
    let area = Math.pow(radius, 2) * pi;
    return area;
}
let C_area1 = Circle_Area(23);
console.log("Area without rounding = ", C_area1);
console.log("Area with rounding = ", C_area1.toFixed(2));

