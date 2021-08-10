(function (window) {
var sayGoodBye = {}
sayGoodBye.speakWord = "Good bye";

sayGoodBye.sayit = function (name) {
  console.log(sayGoodBye.speakWord + " " + name);
}
 window.sayGoodBye = sayGoodBye
})(window)

