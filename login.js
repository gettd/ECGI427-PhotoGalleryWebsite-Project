let loginInfo = [];

function checkCredentials() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < loginInfo.length; i++) {
        if (username === loginInfo[i].username && password === loginInfo[i].password) {
            window.location.href = "index.html";
            return;
        }
    }
    alert("wrong username/password. please try again.");
}

function register() {
    let username = document.getElementById("regUsername").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("regPassword").value;
    let passwordConfirm = document.getElementById("regPasswordConfirm").value;

    if (password !== passwordConfirm) {
        alert("passwords dont match. please try again.");
        return;
    }

    loginInfo.push({username: username, email: email, password: password});
    alert("Account created! You can now log in.");
}
