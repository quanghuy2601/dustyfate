

function test()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "1" && password == "1") {
        window.location = "RemoteControl/index.html";
    } 
    else if (username == "admin" && password == "admin")
    {
        window.location = "Heart/index.html";
    }
    else {
        alert("wrong username or password");
    }
}