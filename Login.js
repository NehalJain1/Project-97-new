var firebaseConfig = {
  apiKey: "AIzaSyD9_Uk3xieZp3p3AfUyUhTU2srtlLB1Jn8",
  authDomain: "new-97-1b9ad.firebaseapp.com",
  databaseURL: "https://new-97-1b9ad-default-rtdb.firebaseio.com",
  projectId: "new-97-1b9ad",
  storageBucket: "new-97-1b9ad.appspot.com",
  messagingSenderId: "337477872349",
  appId: "1:337477872349:web:a0f08b8c280c0a393c8934",
  measurementId: "G-0RZ678J2CS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function Login() {
    Name_var = document.getElementById("Name_input").value ;
    City_name = document.getElementById("City_input").value ;
    Email_id = document.getElementById("Email_input").value ;
    Phone_no = document.getElementById("PhoneNo_input").value ;
    all = Name_var + City_name + Email_id + Phone_no ;
    localStorage.setItem("name",Name_var);
    localStorage.setItem("City",City_name);
    localStorage.setItem("Email",Email_id);
    localStorage.setItem("Phone_number",Phone_no);
    firebase.database().ref("/").child(Phone_no).update({"Name" : Name_var,"City" : City_name,"Email_id" : Email_id});
    //firebase.database().ref("/").child(user_name).update({"add" : "adduser"});
    window.location = "Donate.html" ;
}

function Admin() {
  window.location = "Password.html" ;
}