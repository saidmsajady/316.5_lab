const username = document.getElementById('username');

submitBtn.addEventListener('submit', handleSubmit);


function usernameN(username) {
    const usernamePattern = /^(?=.*(.).*\1)(?!.*[^a-zA-Z0-9]).{4,}$/;
    return usernamePattern.test(username);
}

function emailN() {

}

function passwordN() {

}

function termsAndConditionsN() {

}

function usernameC() {

}

function passwordC() {

}

usernameN();


