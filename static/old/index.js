let username;

window.onload = function () {
    document.getElementById("myButton").onclick = function () {
        username = document.getElementById("myText").value;
        console.log(username);
        document.getElementById("myLabel").innerHTML = "Hello " + username;
    }




    document.getElementById("Yes").onclick = function () {
        window.alert("Please talk to me")

    }
    document.getElementById("No but").onclick = function () {
        window.alert("Talk to me when you achieve her beauty")

    }
    document.getElementById("No").onclick = function () {
        window.alert("Do not talk to me")

    }


}