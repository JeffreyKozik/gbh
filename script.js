// grab all the large buttons then add an event listener to each
[...document.querySelectorAll('.btn-lg')].forEach(button => {
    // listen for the click
    button.addEventListener('click', (e) => {
        // if the click was on one button, collaspe the other pane
        if (e.srcElement.id === 'loginBig') {
            document.querySelector('#signUpInputs').classList.remove('show');
        } else {
            document.querySelector('#loginInputs').classList.remove('show');
        }
    })
})

const loginButton = document.querySelector('#login-go');
const signUpButton = document.querySelector('#signUp-go');

signUpButton.addEventListener('click', function () {
    var userName = document.querySelector('#signUp-email').value;
    var password = document.querySelector('#signUp-password').value;

    firebase.auth().createUserWithEmailAndPassword(userName, password).then(function(user){
        console.log("success: " + user.uid)
    }, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);

    });

    window.open("form.html");
})

loginButton.addEventListener('click', function () {
    var userName = document.querySelector('#login-email').value;
    var password = document.querySelector('#login-password').value;

    firebase.auth().signInWithEmailAndPassword(userName, password).then(function(response){
        console.log("logged in: ");
        console.dir(response.user.uid)

        
        window.open("main-page.html", "_self");
    }, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);

    });
})
