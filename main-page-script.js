var database = firebase.database();
var currentUser;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user;

        database.ref("users/" + currentUser.uid + "/info").on("value", function(snapshot){
            var data = snapshot.val();
            var name = data.name;
            var dob = data.dob;
            var interests = data.interests;
            var skills = data.skills;
            var causes = data.causes;

            document.querySelector("#name-info").innerHTML = "My name is: " + name;
            document.querySelector("#dob-info").innerHTML = "My DOB is: " + dob;
            document.querySelector("#interests-info").innerHTML = "My interests are: " + interests;
            document.querySelector("#skills-info").innerHTML = "My skills are: " + skills;
            document.querySelector("#causes-info").innerHTML = "My causes are: " + causes;
        });
    } else {
      // No user is signed in.

    }
  });

