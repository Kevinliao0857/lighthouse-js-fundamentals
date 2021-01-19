const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Kitchen Materials:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Kitchen Materials:");
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Kitchen Materials: Reversed:");
let k = ingredients.length -1 ;
while (k >= 0) {
  console.log(ingredients[k]);
  k--;
}

console.log("Kitchen Materials Reversed:");
for (let l = ingredients.length - 1; l >= 0; l--){
  console.log(ingredients[l])
}

