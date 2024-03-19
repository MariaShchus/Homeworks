var student = {
    name:"Maria",
    surname:"Shchus",
    age:35,
    getinfo:function() {
        for (let key in this){  
            if(typeof this[key] !== 'function')  {
                console.log(`${key}: ${this[key]}`);
            }  
    }
}
}
student.getinfo();
student.gender = 'female';
student.getinfo();
/////без вашей подсказки !== 'function' был бы капец
//хотя я и так ее не до конца улавливаю