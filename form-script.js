var database = firebase.database();
var currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user;
    } else {
      // No user is signed in.
    }
  });

 
var submitButtom = document.querySelector('#submit');

submitButtom.addEventListener('click', function () {
    console.log(user.uid);
})