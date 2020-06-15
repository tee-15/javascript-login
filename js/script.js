function check(form){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log(username)
    if (username === "username1" && password === "password1"){
        console.log("hello")
        alert("Login sucessfully");
    }
    else{  
        alert("Invalid Username or password")
    }    
}
    
    


 