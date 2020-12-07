const loginButton = document.getElementById("login-form-submit");
const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    if (username === "tempUser@email.com" && password === "tempPW") {
        location.href = "http://127.0.0.1:5500/account.html";
        window.alert('Login successful.');
    } else {
        window.alert( 'Incorrect email or password. Please try again.');
    }
    return false;
})