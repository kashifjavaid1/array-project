var arraydata = []
function enter() {
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("email").value
    var userPhone = document.getElementById("phone").value

    var object = {
        name: userName,
        email: userEmail,
        phone: userPhone,
    }
    arraydata.push(object);
    showresult()
}
function showresult() {
    var result = ""
    for (let index = 0; index < arraydata.length; index++) {
        const user= arraydata[index];
        console.log("user", user);
        result = result + `<div> <h1>Name: ${user.name} </h1> <p> Email: ${user.email} </p> <span>Phone: ${user.phone} </span></div>`
       
        
    }
    console.log("resultresult", result);
    document.getElementById("result").innerHTML = result
}
