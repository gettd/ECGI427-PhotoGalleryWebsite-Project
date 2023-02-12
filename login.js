const loginInfo = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
];

function checkCredentials() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < loginInfo.length; i++) {
        if (username === loginInfo[i].username && password === loginInfo[i].password) {
            window.location.href = "next-page.html";
            return;
        }
    }
    alert("Incorrect username or password. Please try again.");
}