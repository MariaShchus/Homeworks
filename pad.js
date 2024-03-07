function pad (str,symb,quantityOfSymb,bool) {
    var a="";		
    for(let i = 1; i <= quantityOfSymb; i++) {
     a+= symb;
    }
    var b;   
    if (bool===true) {
        b = a+str;
    } else {
        b = str+a; 
    }  
  result = b;
  return result;
  }
let someva = pad('символ','*',3,true);
console.log(someva);