
const findPair = (inputArr, k) => {
  let set = new Set();
  let totalI = 0;
  for (let i = 0; i < inputArr.length; i++) {
    let complement = k - inputArr[i];
    if (set.has(complement)) {
      console.log(`La fonction est true car la somme de deux nombres dans l'array [${inputArr}] est égal à ${k}.`);
      console.log(`Nombre de comparaison : ${totalI}`);
      return true;
    }
    set.add(inputArr[i]);
    totalI++;
  }
  console.log(`La fonction est false car la somme de deux nombres dans l'array [${inputArr}] n'est pas égal à ${k}.`);
  console.log(`Nombre de comparaison : ${totalI}`);
  return false;
}

unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
let k = 34

findPair(unsorted_Array, k)

unsorted_Array = [39, 28, 44, 4, 10, 83, 11, 56, 22];
k = 48

findPair(unsorted_Array, k)
