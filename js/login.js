function login(event){

    var n = document.getElementById("name").value;
    var p = document.getElementById("pass").value;

    if(n==false||p==false)
    {
        event.preventDefault();
    }

     else if(n=="Doaa" && p=="20200506"){

        location.href = "index.html";
    }
    
    else{
        
       alert("Username Or Password Is Incorrect")

    }
  
}