// 해당 목록 불러와주기
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn  = document.getElementById('login');

registerBtn.addEventListener("click",()=> {
    container.classList.add("active");
});

loginBtn.addEventListener("click",()=> {
    container.classList.remove("active");
});