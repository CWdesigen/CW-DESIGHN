document.addEventListener('DOMContentLoaded', () => {
    const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    if (loginDetails && loginDetails.username) {
        document.getElementById('Username').innerText = loginDetails.username;
    } else {
        document.getElementById('Username').innerText = "Guest";
    }
});