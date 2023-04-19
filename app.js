function merge_Arrays(left_sub_array, right_sub_array) {
  let array = []
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
        array.push(left_sub_array.shift())
    } else {
        array.push(right_sub_array.shift())
    }
  }
  return [ ...array, ...left_sub_array, ...right_sub_array ];
}
function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  const sortedLeftArray = merge_sort(leftArray);
  const sortedRightArray = merge_sort(rightArray);

  return merge_Arrays(sortedLeftArray, sortedRightArray);
}

// unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
// console.log(`L'array original est ${unsorted_Array}`)
// console.log("The sorted array will be: ",merge_sort(unsorted_Array));

const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
      console.error(error.message);
      return ;
  }
  console.log(`L'array original est ${data}`)
  data = data.split(" ");
  data = Array.from(data);
  data = data.map(function(data) {
    return parseInt(data); });
  console.log("Le résultat de l'array trié est : ", merge_sort(data));
});