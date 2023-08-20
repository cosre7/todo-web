const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const logOutButton = document.querySelector('#logOut');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

function onLoginSubmit(event) {
    event.preventDefault();
    hideLoginForm()
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function showLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
}

function hideLoginForm() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    showLoginForm();
} else {
    // show the greeting
    paintGreetings(savedUsername);
    hideLoginForm();
}
     
function onLogoutSubmit(event) {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = '';
    showLoginForm();
}

logOutButton.addEventListener('click', onLogoutSubmit);