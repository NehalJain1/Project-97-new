function Check_Passoward() {
    input = document.getElementById("passoward_id").value;
if(String(input) == "2011") {
    console.log("Correct Passoward");
    window.location = "Data.html" ;
}
else{
    document.getElementById("result").innerHTML = "Wrong Passoward. Try Again";
}
}