
function openLogin(){
document.getElementById('loginModal').style.display='flex';
}

function closeLogin(){
document.getElementById('loginModal').style.display='none';
alert('Đăng nhập thành công');
}

function openAdmin(){
document.getElementById('adminModal').style.display='flex';
}

function closeAdmin(){
document.getElementById('adminModal').style.display='none';
}

function fakePay(user,pass){
alert(
'Thanh toán MoMo thành công!\n\n' +
'Tài khoản: ' + user + '\n' +
'Mật khẩu: ' + pass
);
}

function fakeNap(){
alert('Đã mở thanh toán MoMo giả lập');
}

function randomAcc(){
const list=[
'Random acc huyền thoại',
'Random acc VIP',
'Random acc cực hiếm'
];

const pick=list[Math.floor(Math.random()*list.length)];

alert('Anh nhận được: ' + pick);
}
