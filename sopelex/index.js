function sayHello(name) {
    return 'Hello ' + name;
}

const sayHello_arrow = (name) => 'Greeting ' + name;

const sope = sayHello('sope');
const sope_arrow = sayHello_arrow('sope');

console.log(sope, sope_arrow);


const a = ((..._) => {
    console.log('A function', _);
});

a(1, 2, 3, 4, 5);

const [b, c, ...d] = [a, 2, 3, 4, 5, 6];
console.log(d);

document.getElementById('app').innerHTML = sope + sope_arrow;

const button = document.querySelector('button');
button.addEventListener('click', event => console.log(event));


button.addEventListener('click', event => console.log(event));
button.addEventListener()

document.querySelectorAll('button');



