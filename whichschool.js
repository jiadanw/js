const whichSchool = function (age) {

  if( age <13){
   return school = "Elementaryschool";

  }
  else if( 13<= age && age < 18 ) {
    return school = "Secondary School";
  }
  else {
    return school= "lighthouse Labs";
}
}





console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));