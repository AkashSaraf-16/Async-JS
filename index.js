// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Async JavaScript</h1>`;

// Synchronous JavaScript
// function sayHi(name) {
//   console.log(`Hi , ${name}!!!`);
// }

// function processUser(callback) {
//   callback('Akash');
// }
// processUser(sayHi);

// Asynchronous JavaScript
function getUser(x, callback) {
  setTimeout(() => {
    console.log('got it');
    callback(`${x}@${Math.floor(Math.random() * 1000000000)}`);
  }, 5000);
}
function getPhoneNo(z, callback) {
  setTimeout(() => {
    callback(z);
  }, 5000);
}
let name = 'Akash';
getUser(name, (x) => {
  console.log(`We got the user, ${x}`);
  getPhoneNo(x, (y) => {
    let data = y.split('@');
    let phone = data[1];
    console.log(`Contact details for ${name} is ${phone}`);
  });
});