let save;


function dangky() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {
        username: username,
        email: email,
        password: password,
    }
     localStorage.setItem(user.username, JSON.stringify(user));

    if (username !== "" && email !== "" && password !== "") {
        alert("Đăng ký thành công");
        window.location.href = "Login.html"
    } else {
        alert("vui lòng nhập lại");
    }


}


let username, email, password;
document.getElementById("dangnhap").addEventListener("click", function (event) {
    dangnhap();
})

function dangnhap() {
    event.preventDefault();
    username1 = document.getElementById("username").value;
    console.log(username)
    email1 = document.getElementById("email").value;
    password1 = document.getElementById("password").value;

    let user = localStorage.getItem(username1);

    let data = JSON.parse(user);
    console.log(user, data)

    // if (username !== "" && email !== "" && password !== "") {
    //     alert("vui lòng nhập lại");


    if (username1 ===data.username&&email1 === data.email && password1 === data.password) {
        alert("đăng nhập thành công");
        window.location.href = "case.html";
    } else {
        alert("nhap lai")
    }


}



