const bubbleSort = (inputArr, k) => {
  let len = inputArr.length;
  let totalI = 0
  let sum = false
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (inputArr[i] + inputArr[j] === k) {
        sum = true;
        break;
      }
    }
    if (sum) {
      break;
    }
    totalI++
  }
  if (sum) {
    console.log(`La fonction est ${sum} car la somme de deux nombres dans l'array [${inputArr}] est égal à ${k}.`);
    console.log(`Nombre de comparaison : ${totalI}`);
  } else {
    console.log(`La fonction est ${sum} car la somme de deux nombres dans l'array [${inputArr}] n'est pas égal à ${k}.`);
    console.log(`Nombre de comparaison : ${totalI}`);
  }
  return sum;
};

unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
let k = 34

bubbleSort(unsorted_Array, k)