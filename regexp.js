let regexp1 = /[^a]{6,}/mgi



var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
for(let i=0; i<arr.length; i++){
    if (arr[i].email.match(/(\w+\.\w+|\w+)(@gmail|@yahoo)\.com/)) {
        console.log(arr[i].email);
    }
  };