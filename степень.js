function pow(x,y) {
    let result = x;
    for (let i = 1; i < y; i++) {
      result *= x;
    }   
    return result; 
  }
  let somevar = pow(5,5);
  console.log(somevar);
  