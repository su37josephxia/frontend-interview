/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p = 0, r) {
  r = r || A.length;

  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }

  return A;
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide(A, p, r) {
  const x = A[r - 1];
  let i = p - 1;

  for (let j = p; j < r - 1; j++) {
    if (A[j] <= x) {
      i++;
      swap(A, i, j);
    }
  }

  swap(A, i + 1, r - 1);

  return i + 1;
}

function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}

function quickSort(array) {
  const pivot = array[array.length - 1];
  const left = array.filter((v, i) => v <= pivot && i != array.length - 1);
  const right = array.filter((v) => v > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const qs = (array) => [
  ...quickSort(array.filter((v, i) => v <= pivot && i != array.length - 1)),
  array[array.length - 1],
  ...quickSort(array.filter((v) => v > pivot)),
];
