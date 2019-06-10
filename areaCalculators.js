const calculateRectangleArea = function ( length, width){
  if (length >0 && width >0) {
  return length * width;}
  else (undefined);
  
}
const calculateTriangleArea = function( base, height){
  if (base>0 && height >0) {
  return base * height /2;}
 else (undefined);
}
const calculateCircleArea= function (radius) {
  if (radius>0){
    return 3.14 * radius *radius;
  }
  else ( undefined);
}

console.log(calculateRectangleArea(1, -2));

console.log(calculateTriangleArea(1, 2));
console.log(calculateCircleArea(2));

