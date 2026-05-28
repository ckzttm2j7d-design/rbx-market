
function buyAccount(username,password){
  alert(
    "Thanh toán thành công!\n\n" +
    "Tài khoản: " + username + "\n" +
    "Mật khẩu: " + password
  );
}

function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
  alert("Đăng nhập thành công!");
}
