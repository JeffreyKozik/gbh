var database = firebase.database();
var currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user;

        database.ref("users/" + currentUser.uid + "/info").on("value", function(snapshot){
            var data = snapshot.val();
            var name = data.name;
            var bio = data.bio;

            document.querySelector("#name-info").innerHTML = "My name is: " + name;
            document.querySelector("#bio-info").innerHTML = "About me: " + bio;
        });
    } else {
      // No user is signed in.

    }
  });

