var ageOfUser = prompt('Enter your age', '');
let nmb = ageOfUser % 10;
if (ageOfUser>10 && ageOfUser <=20) {
    console.log(+ageOfUser+'років')
} else if (nmb == 1) {
    console.log(+ageOfUser+'рік')
} else if (nmb>=2 && nmb <=4) {
    console.log(+ageOfUser+'роки')
} else if (ageOfUser <0) {
        console.log('invalid input')
} else {
    console.log(+ageOfUser+'років')
}

