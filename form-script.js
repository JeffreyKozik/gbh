var database = firebase.database();
var currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user;
    } else {
      // No user is signed in.

    }
  });

 
var submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function () {
    var name = document.querySelector('#name').value;
    var dob = document.querySelector('#dob').value;

    const interests = [...document.querySelectorAll('.interests')].filter(x => x.checked).map(x => x.value);
    const skills = [...document.querySelectorAll('.skills')].filter(x => x.checked).map(x => x.value);
    const causes = [...document.querySelectorAll('.causes')].filter(x => x.checked).map(x => x.value);

    var uid = currentUser.uid;
    var userRef = database.ref().child("users/"+ uid +"/info");
    var info = {
        name,
        dob,
        interests,
        skills,
        causes
    };

    userRef.set(info);

    window.open("main-page.html", "_self");
})