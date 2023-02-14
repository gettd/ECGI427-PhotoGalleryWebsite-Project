
let loginInfo = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
];

function register() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let newAccount = {
        email: email,
        username: username,
        password: password
    };
    loginInfo.push(newAccount);
    alert("Your account has been registered");
}