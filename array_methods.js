// Mutabilidade

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

list.push(10);

console.log(list);

const eliminatedValue = list.pop();

console.log(list);
console.log(eliminatedValue);

// Imutabilidade

const list2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(list.concat(list2));
