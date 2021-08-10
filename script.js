var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (i=0; i<names.length; i++) {
  name = names[i]
  if (name[0] == "J") {
    sayGoodBye.sayit(name)
  } else {
    sayHello.sayit(name)
  }
}
