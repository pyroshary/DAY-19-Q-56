//making a mixed array
let mixedlist = [1,"apple",5 ,"tomato",15,"banana"]

let array = mixedlist.filter(items=> typeof items === "number");

console.log(array)