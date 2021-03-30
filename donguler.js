for (var i = 100; i >= 10; i--) {
    console.log(i);
}



var i = 10;
while (i <= 100) {
    console.log(i);
    i = i + 5;
}



var u_username = "guest";
var u_password = "123456";

var loggedin = false;


while (loggedin == false) {

    var username = prompt("Kullanıcı Adı: ");
    var password = prompt("Parola: ");

    if ((u_username == username) && (u_password == password)) {
        console.log("Giriş Başarılı");
        loggedin = true;
        
    } else {
        console.log("Hatalı kullanıcı adı veya parola");
    }
}