// modal-js
const logins = document.querySelectorAll('.js-login');
const registers = document.querySelectorAll('.js-register');
const modalLogin = document.querySelector('.js-modal-login'); // Modal đăng nhập
const modalRegister = document.querySelector('.js-modal-register'); // Modal đăng ký
const modalContainerLogin = document.querySelector('.js-modal-login-container');
const modalContainerRegister = document.querySelector('.js-modal-register-container');
const modalCloseLogin = document.querySelector('.js-modal-login-close');
const modalCloseRegister = document.querySelector('.js-modal-register-close');
const contentWrapper = document.querySelector('.main');
const modalBackdrop = document.querySelector('.js-modal-backdrop'); // Lớp nền mờ

// Hàm hiển thị modal đăng nhập và làm mờ nền
function showLogin() {
    modalLogin.classList.add('open'); // Hiển thị modal đăng nhập
    modalRegister.classList.remove('open'); // Ẩn modal đăng ký (nếu đang mở)
    contentWrapper.classList.add('blur'); // Làm mờ nền
    modalBackdrop.style.display = 'block'; // Hiển thị lớp nền mờ
}

// Hàm hiển thị modal đăng ký và làm mờ nền
function showRegister() {
    modalRegister.classList.add('open'); // Hiển thị modal đăng ký
    modalLogin.classList.remove('open'); // Ẩn modal đăng nhập (nếu đang mở)
    contentWrapper.classList.add('blur'); // Làm mờ nền
    modalBackdrop.style.display = 'block'; // Hiển thị lớp nền mờ
}

// Hàm ẩn modal đăng nhập và xóa mờ nền
function hideLogin() {
    modalLogin.classList.remove('open');
    contentWrapper.classList.remove('blur'); // Xóa mờ nền
    modalBackdrop.style.display = 'none'; // Ẩn lớp nền mờ
}

// Hàm ẩn modal đăng ký và xóa mờ nền
function hideRegister() {
    modalRegister.classList.remove('open');
    contentWrapper.classList.remove('blur'); // Xóa mờ nền
    modalBackdrop.style.display = 'none'; // Ẩn lớp nền mờ
}

// Thêm sự kiện click vào các nút login
for (const loginbtn of logins) {
    loginbtn.addEventListener('click', showLogin);
}

// Thêm sự kiện click vào các nút register
for (const registerbtn of registers) {
    registerbtn.addEventListener('click', showRegister);
}

// Nghe sự kiện click vào nút đóng modal đăng nhập
modalCloseLogin.addEventListener('click', hideLogin);

// Nghe sự kiện click vào nút đóng modal đăng ký
modalCloseRegister.addEventListener('click', hideRegister);

// Nghe sự kiện click ra ngoài modal đăng nhập
modalLogin.addEventListener('click', hideLogin);

// Nghe sự kiện click ra ngoài modal đăng ký
modalRegister.addEventListener('click', hideRegister);

// Ngăn chặn sự kiện click bên trong modal container đăng nhập
modalContainerLogin.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Ngăn chặn sự kiện click bên trong modal container đăng ký
modalContainerRegister.addEventListener('click', function (event) {
    event.stopPropagation();
});