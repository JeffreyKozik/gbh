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
    var bio = document.querySelector('#bio').value;

    var uid = currentUser.uid;
    var userRef = database.ref().child("users/"+ uid +"/info");
    var info = {
        name: name,
        bio: bio,
    };

    userRef.set(info);

    window.open("main-page.html", "_self");
})