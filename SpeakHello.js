(function (window) {
var sayHello = {}
sayHello.speakWord = "Hello";

sayHello.sayit = function (name) {
  console.log(sayHello.speakWord + " " + name);
}
 window.sayHello = sayHello
})(window)
