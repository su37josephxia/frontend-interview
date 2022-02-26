const ary = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];

const flatten = (input) => {
  result = [];
  input.forEach((v) =>
    Array.isArray(v) ? (result = result.concat(flatten(v))) : result.push(v)
  );
  return result;
};
const unique = (input) => {
  var ret = [];
  for (var i = 0; i < input.length; i++) {
    if (ret.indexOf(input[i]) == -1) {
      ret.push(input[i]);
    }
  }
  return ret;
};
const sort = (input) => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input
};

console.log('指令式',sort(unique(flatten(ary))))


console.log(
  "声明式",
  [...new Set(ary.flat(Infinity))].sort((a, b) => a - b)
);

ary.filter(v => v.a != '123')
.map()

