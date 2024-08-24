//DOM-ის მაგალითები


const element = document.getElementById('myElement'); // მოძიებს ელემენტს ID-ის მიხედვით

const element = document.querySelector('.myClass');
element.classList.add('newClass'); // ამატებს ახალ კლასს


const element = document.getElementById('myElement');
element.textContent = 'ახალი ტექსტი'; // ცვლის ელემენტის ტექსტს


const element = document.querySelector('#myElement');
element.innerHTML = '<p>ახალი HTML კონტენტი</p>'; // ცვლის ელემენტის HTML კონტენტს


const element = document.querySelector('img');
element.setAttribute('alt', 'ახალი ალტ ტექსტი'); // ატრიბუტის დამატება
element.removeAttribute('alt'); // ატრიბუტის წაშლა


const newElement = document.createElement('div');
newElement.textContent = 'ახალი ელემენტი';
document.body.appendChild(newElement); // დამატება ბადის ბოლო

const input = document.querySelector('#myInput');
input.value = 'ნორმალური ტექსტი'; // ცვლის ტექსტური შეყვანის ველის მნიშვნელობას


const parentElement = document.querySelector('#parent');
const childElements = parentElement.children; // აბრუნებს მშვენიერი ელემენტების კოლექციას

for (let child of childElements) {
    console.log(child.textContent); // ამოწმებს ყველა ბავშვის ტექსტი
}
