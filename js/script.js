var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];
//log out length to see elements in array
console.log(groceries.length);
//18

//create var deleteDuplicates for
//function express. and list as parameter
//inside function body declare var cleanList and empty array as value
var deleteDuplicates = function (list) {
  var cleanList = [];

  //use for..of to loop through array list
  //passed through function ref.each element as item
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};
//create var newGtoceries and assighn function to call deleteDuplicates
//pass groceries as argument
var newGroceries = deleteDuplicates(groceries);

//log out new length
console.log(newGroceries.length);
//15

//create num.list
//think wich tool will help get element and index
newGroceries.forEach(function (item, index) {
  //log out num. list that starts with 1..not 0
  console.log(`#${index + 1}-${item}`);
});
