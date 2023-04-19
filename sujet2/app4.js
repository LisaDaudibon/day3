
const bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let totalI = 0;
  let count = 1; // initialize the count to 1 for the last building
  let highestFloor = inputArr[len-1]; // start with the last building in the west
  for (let i = len-2; i >= 0; i--) { // iterate from the second last building to the first
    if (inputArr[i] > highestFloor) { // if the floor of the current building is higher than the highest so far
      highestFloor = inputArr[i]; // update the highest floor
      count++; // increment the count
    }
    totalI = totalI++;
  }
  console.log(`Nombre de comparaison : ${totalI}`);
  console.log(`Il y a ${count} bâtiments qui ont au moins un appartement exposé à l'ouest ! `);
  return count;
};

unsorted_Array = [3, 5, 9, 4, 1, 7, 6];
new_unsorted_Array = [5, 10, 7, 30, 18, 2, 9, 13, 20, 1, 8, 16, 14, 6, 26, 4, 23, 11, 3, 17, 25, 12, 21, 24, 15];

bubbleSort(unsorted_Array)
bubbleSort(new_unsorted_Array)