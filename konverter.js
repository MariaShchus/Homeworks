let kolich = prompt ('Введіть число', '');
let edinIzmer = prompt ('Введіть одиницю виміру (кг, год, км)', '');
var a;   
switch (edinIzmer) {
    case 'км':
        a = kolich * 1000;
        console.log(kolich +' км '+'це '+a + ' м' );
        break;
    case 'год':
        a = kolich * 60;
        console.log(kolich +' год '+'це '+a + ' хв' );
        break;
    case 'кг':
        a = kolich * 1000;
        console.log(kolich +' кг '+'це '+a + ' г' );
        break;
    default:
        console.log('Введіть км, год або кг');
}
