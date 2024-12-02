// auto banner
let currentIndex = 0;
const images = document.querySelectorAll('.banner img');
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } 
    document.querySelector('.banner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 2000);

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


// Hàm ẩn modal đăng ký và xóa mờ nền
function hideRegister() {
    modalRegister.classList.remove('open');
    contentWrapper.classList.remove('blur'); // Xóa mờ nền
    modalBackdrop.style.display = 'none'; // Ẩn lớp nền mờ
}

// Thêm sự kiện click vào các nút login
for (const loginbtn of logins) {
    loginbtn.addEventListener('click', () => {
        showLogin();
        showTab('login');
    });
}

// Thêm sự kiện click vào các nút register
for (const registerbtn of registers) {
    registerbtn.addEventListener('click', () => {
        showLogin();
        showTab('register');
    });
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


// code dòng chữ chuyển động

const texts = [
  "Thiết kế dễ dàng cùng Canva Pro",
  "XBox Game Pass",
  "Giải trí cực Chill",
  "Kết nối yêu thương cùng Tinder Plus"
];

let currentIndex2 = 0;

// Hàm cập nhật văn bản hiển thị
function updateText() {
  const textElement = document.querySelector('.text');
  textElement.textContent = texts[currentIndex2];
}

// Hàm chuyển đến văn bản tiếp theo
function nextText() {
  currentIndex2 = (currentIndex2 + 1) % texts.length; // Chuyển đến chỉ số tiếp theo
  updateText();
}

// Hàm chuyển đến văn bản trước
function prevText() {
  currentIndex = (currentIndex2 - 1 + texts.length) % texts.length; // Chuyển đến chỉ số trước
  updateText();
}

// Gán sự kiện click cho các nút
document.getElementById('next-btn').addEventListener('click', nextText);
document.getElementById('prev-btn').addEventListener('click', prevText);

// Tự động chuyển đổi văn bản sau mỗi 3 giây
setInterval(nextText, 4000);

// Cập nhật văn bản ban đầu
updateText();





function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(`${tab}-tab`).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tab}')"]`).classList.add('active');
    const desc = {
      login: 'Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp dẫn.',
      register: 'Tạo tài khoản để mua sắm dễ dàng và nhận được nhiều ưu đãi.'
    };
    document.getElementById('tab-desc').innerText = desc[tab];
  }
  document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const acceptTerms = document.getElementById('accept-terms').checked;

    // Kiểm tra các trường
    if (!name || !email || !username || !password || !confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Thông báo",
            text: "Vui lòng điền đầy đủ thông tin!",
          
          });
   
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Hệ thống thông báo",
            text: "Vui lòng nhập địa chỉ email hợp lệ!",
          
          });
      return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Hệ thống thông báo",
            text: "Mật khẩu và xác nhận mật khẩu không khớp!",
          
          });
      return;
    }

    // Kiểm tra checkbox
    if (!acceptTerms) {
        Swal.fire({
            icon: "error",
            title: "Hệ thống thông báo",
            text: "Bạn cần đồng ý với điều khoản để tiếp tục!",
          
        });
     
      return;
    }
    Swal.fire({
        icon: "success",
        title: "Hệ thống thông báo",
        text: "Đăng ký tài khoản thành công!",
      
    });
    showLogin();
    showTab('login');

  });


  const loginForm = document.getElementById('loginForm');

  // Lắng nghe sự kiện submit
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('usernameLogin').value.trim();
    const password = document.getElementById('passwordLogin').value.trim();
    if (!username || !password) {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập!');
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Thông báo",
      text: "Đăng nhập thành công",
    }).then(() => {
      window.location.href = '/page_user/index_logged in.html'; // Đảm bảo đường dẫn chính xác
      document.querySelector('.cart-info').style.display = 'block';
      document.querySelector('.cart-1').classList.add('hidden');
      document.querySelector('.cart-1-reponsive').classList.add('hidden');
      document.querySelector('.cart_2_reponsive').classList.add('block');
      document.getElementById('name_login_reponsive').textContent = username; 
      document.getElementById('name_login').textContent = username;
      hideLogin(); // Thực thi hàm hideLogin sau khi hiển thị thông báo
    });
   
  });
  function hideLogin() {
    modalLogin.classList.remove('open');
    contentWrapper.classList.remove('blur'); // Xóa mờ nền
    modalBackdrop.style.display = 'none'; // Ẩn lớp nền mờ
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      loop: true, // Cho phép lặp slider
      slidesPerView: 1, // Hiển thị 1 slide mỗi lần
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Tự động chuyển sau 3 giây
      },
    });
  });
  document.querySelector('.bar_reponsive').addEventListener('click', function () {
    const header = document.querySelector('.header-2');
    header.classList.add('active'); 
 
  });

  // Đóng header
  document.querySelector('.close-btn-header').addEventListener('click', function () {
    const header = document.querySelector('.header-2');
    header.classList.remove('active'); 
  });


  document.querySelector('.close-btn-header-2').addEventListener('click', function () {
    const header = document.querySelector('.header-2');
    header.classList.remove('active'); 
  });
  document.getElementById("toggleButton").addEventListener("click", function () {
    const category = document.getElementById("category");
    category.classList.toggle("show");
  });
  

  document.getElementById('PasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('usernamePassword').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (!username || !newPassword || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Hệ thống thông báo",
        text: "Vui lòng nhập đầy đủ thông tin.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Hệ thống thông báo",
        text: "Mật khẩu mới và nhập lại mật khẩu không giống nhau.",
      
      });
  
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Hệ thống thông báo",
      text: "Đặt lại mật khẩu thành công",
    
    });
    showTab('login');

  });


  document.getElementById('logout').addEventListener('click', function (event) {
      event.preventDefault(); // Ngăn chuyển hướng trang
      document.querySelector('.cart-info').style.display = 'none';
      document.querySelector('.cart-1').classList.remove('hidden');
      document.querySelector('.cart-1-reponsive').classList.remove('hidden');
      document.querySelector('.cart_2_reponsive').classList.remove('block');      
  });