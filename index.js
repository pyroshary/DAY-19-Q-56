//making a mixed array
var mixedlist = [1, "apple", 5, "tomato", 15, "banana"];
var array = mixedlist.filter(function (items) { return typeof items === "number"; });
console.log(array);
