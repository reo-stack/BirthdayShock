function checkPassword() {
    const password = document.getElementById("password-input").value;
    const correctPassword = "DancingQueen17"; // Change this to the actual password you want

    if (password === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again!";
    }
}

function revealMessage() {
    document.getElementById("message").style.display = "block";
}
