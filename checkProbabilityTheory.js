function checkProbabilityTheory(count) {
    let i=1;
    let a;
    let c;
do {
    a = (Math.random() * 1000) + 100; 
    i++
}while (i < count);
let j = 1;
if (a%2===0) {
    j++;
} else {
    c = i-j;
}
let d = j/i*100;
let f = c/i*100;
console.log('кількість згенерованих чисел:'+i);
console.log('парних чисел:'+j);
console.log('не парних чисел:'+c);
console.log('відсоток парних до не парних:'+d + '%' + f);
}
let som = checkProbabilityTheory(5);
  console.log(som);