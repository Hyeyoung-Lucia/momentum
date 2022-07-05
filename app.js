const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginsubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const userName = loginInput.value
    localStorage.setItem(USERNAME_KEY, userName)
    paintGreetings(userName)
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginsubmit)
}else{
    paintGreetings(saveUsername)
}