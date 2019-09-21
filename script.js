const createButton = document.querySelector('#create');

var loginButton = document.querySelector('#login');

createButton.addEventListener('click', function () {
    var userName = document.querySelector('#userName').value;
    var password = document.querySelector('#password').value;

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
    var userName = document.querySelector('#userName').value;
    var password = document.querySelector('#password').value;

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
