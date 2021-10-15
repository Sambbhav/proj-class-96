//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCOMZ8J3xWkmQE_Ku4cvlZE7vsN342K3Vw",
    authDomain: "sambbhav-kwitter-app.firebaseapp.com",
    databaseURL: "https://sambbhav-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "sambbhav-kwitter-app",
    storageBucket: "sambbhav-kwitter-app.appspot.com",
    messagingSenderId: "301521392373",
    appId: "1:301521392373:web:a03be5054238ee05d6ebbc",
    measurementId: "G-EC0YGWDSJJ"
  };
  
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
          like:0

    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
