const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const result = nums.filter((num) => num % 2 === 0);
console.log(result); // Risultato: [2, 8, 4, 12]
