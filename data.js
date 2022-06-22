var firebaseConfig = {
    apiKey: "AIzaSyCexPSDYx3rJjqvCg6RSH8Wvy-Yo81XM9E",
    authDomain: "chat-app-bace3.firebaseapp.com",
    databaseURL: "https://chat-app-bace3-default-rtdb.firebaseio.com",
    projectId: "chat-app-bace3",
    storageBucket: "chat-app-bace3.appspot.com",
    messagingSenderId: "410748762750",
    appId: "1:410748762750:web:2b846e9a2d8503437f362f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    Room_names="";
function getData(){ 
//{ firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("info").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    
        firebase.database().ref("/").on('value', function(snapshot) 
        {
            document.getElementById("info").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {childKey  = childSnapshot.key;
                childData = childSnapshot.val(); 
                firebase_message_id = childKey;
                Room_names = childData;
    
//Start code
console.log("firebase message id",firebase_message_id);
console.log("message Room_names",Room_names);
console.log("firebase_message_id",typeof(firebase_message_id));

City = Room_names["City"];
Email_id = Room_names["Email_id"];
Name = Room_names["Name"];    

Tag_with_Name = ' <h4 class="Name">Name: ' + Name + '</h4>' ; 
Tag_with_City = ' <h4 class="City">City: ' + City + '</h4>' ; 
Tag_with_Email_id = ' <h4 class="Email_id">Email_id: ' + Email_id + '</h4>' ;
 
row = Tag_with_Name+ Tag_with_City+Tag_with_Email_id+'<hr>' ;
//id for the document.get element by id
document.getElementById("info").innerHTML = document.getElementById("info").innerHTML + row ;
//});})
//End code
  });});}


 getData();