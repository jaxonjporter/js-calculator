var display = document.getElementById("display");
var add = document.getElementById("add");
var subract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");
var show = ""
var equation = ""

add.addEventListener("click", function() {
  equation += "+"
  display.innerHTML += "+"

});
subtract.addEventListener("click", function() {
  equation += "-"
  display.innerHTML += "-"

  
});
multiply.addEventListener("click", function() {
  equation += "*"
  display.innerHTML += "*"

});
divide.addEventListener("click", function() {
  equation += "/"
  display.innerHTML += "/"
});
one.addEventListener("click", function() {
  equation += "1"
  display.innerHTML += "1"
});
two.addEventListener("click", function() {
  equation += "2"
  display.innerHTML += "2"
});
three.addEventListener("click", function() {
  equation += "3"
  display.innerHTML += "3"
});
four.addEventListener("click", function() {
  equation += "4"
  display.innerHTML += "4"
});
five.addEventListener("click", function() {
  equation += "5"
  display.innerHTML += "5"
});
six.addEventListener("click", function() {
  equation += "6"
  display.innerHTML += "6"
});
seven.addEventListener("click", function() {
  equation += "7"
  display.innerHTML += "7"
});
eight.addEventListener("click", function() {
  equation += "8"
  display.innerHTML += "8"
});
nine.addEventListener("click", function() {
  equation += "9"
  display.innerHTML += "9"
});
zero.addEventListener("click", function() {
  equation += "0"
  display.innerHTML += "0"
});
leftbend.addEventListener("click", function() {
  equation += "("
  display.innerHTML += "("
});
rightbend.addEventListener("click", function() {
  equation += ")"
  display.innerHTML += ")"
});
clear.addEventListener("click", function() {
  equation = ""
  display.innerHTML = ""
});

equals.addEventListener("click", function() {
  display.innerHTML = eval(equation)
  equation = display.innerHTML
})


