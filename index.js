// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Async JavaScript</h1>`;

function sayHi(name) {
  console.log(`Hi , ${name}!!!`);
}

function processUser(callback) {
  callback('Akash');
}
processUser(sayHi);
