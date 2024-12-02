      // gio hang 
const clickableDivs = document.querySelectorAll('.code_8');
const inputContainers = document.querySelectorAll('.code_9');

clickableDivs.forEach((div, index) => {
    div.addEventListener('click', () => {  
        inputContainers.forEach((inputContainer, i) => {
            if (i !== index) {
                inputContainer.style.display = 'none';
            }
        });
        const currentInputContainer = inputContainers[index];
        currentInputContainer.style.display = (currentInputContainer.style.display === 'block') ? 'none' : 'block';
    });
});

function sendInput(index) {
    const inputField = document.querySelectorAll('.code_9')[index].querySelector('input');
    alert('Bạn đã gửi thành công ' + inputField.value);
    inputField.value = '';
}

inputContainers.forEach((container, index) => {
    const button = container.querySelector('button');
    button.addEventListener('click', () => sendInput(index));
});

// Khởi tạo mã giảm giá và số dư hiện tại
let discount = 0; // Mặc định giảm giá là 0
let currentBalance = 0; // Mặc định số dư hiện tại là 0

// Cập nhật tổng tiền
function updateTotal() {
    const products = document.querySelectorAll('.code_30');
    let totalValue = 0;

    products.forEach(product => {
        if (product.style.display !== 'none') {
            const priceElement = product.querySelector('.code_24 b');
            const quantityInput = product.querySelector('input[type="number"]');
            const price = parseInt(priceElement.textContent.replace(/\./g, '').trim());
            const quantity = parseInt(quantityInput.value);
            totalValue += price * quantity; // Tính tổng giá trị sản phẩm
        }
    });

    // Cập nhật tổng giá trị sản phẩm
    const totalValueElement = document.querySelector('.code_41 div:nth-child(2)');
    totalValueElement.innerHTML = `<b>${totalValue.toLocaleString()}đ</b>`; // Hiển thị tổng giá trị sản phẩm

    const totalPayment = totalValue - discount; // Tổng tiền sau giảm giá
    const totalPaymentElement = document.getElementById('totalPayment');
    totalPaymentElement.innerHTML = `<b>${totalPayment < 0 ? 0 : totalPayment.toLocaleString()}đ</b>`; // Cập nhật tổng tiền

    // Cập nhật số tiền cần nạp thêm
    const amountNeeded = Math.max(totalPayment - currentBalance, 0); // Số tiền cần nạp thêm
    const amountNeededElement = document.getElementById('amountNeeded');
    amountNeededElement.innerHTML = `<b>${amountNeeded.toLocaleString()}đ</b>`; // Cập nhật số tiền cần nạp thêm
}

// Cập nhật hàm increase
function increase(id) {
    const quantityInput = document.getElementById(id);
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 100) {
        quantityInput.value = currentValue + 1;
        updateTotal(); // Cập nhật tổng khi tăng số lượng
    }
}

// Cập nhật hàm decrease
function decrease(id) {
    const quantityInput = document.getElementById(id);
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotal(); // Cập nhật tổng khi giảm số lượng
    }
}

// Cập nhật hàm removeProduct
function removeProduct(productId) {
    const productDiv = document.getElementById(productId);
    if (productDiv) {
        productDiv.style.display = 'none'; // Ẩn thẻ div sản phẩm
        updateTotal(); // Cập nhật tổng khi xóa sản phẩm
        checkCartEmpty(); // Kiểm tra giỏ hàng
    }
}

function checkCartEmpty() {
    const products = document.querySelectorAll('.code_30');
    let isEmpty = true;

    products.forEach(product => {
        if (product.style.display !== 'none') {
            isEmpty = false;
        }
    });

    const emptyCartMessage = document.getElementById('emptyCart');
    const cart = document.getElementById('cart');

    emptyCartMessage.style.display = isEmpty ? 'block' : 'none';
    cart.style.display = isEmpty ? 'none' : 'block';
}

// Hàm cập nhật mã giảm giá
function updateDiscount(newDiscount) {
    if (newDiscount == 'phuongdeptrai' || newDiscount == 'coloanchamdoan') {
        discount = 1000000000; // Đặt giá trị lớn để giảm 100% hóa đơn
    } else {
        discount = 0; // Không có giảm giá nếu mã không hợp lệ
    }
    updateTotal(); // Cập nhật tổng sau khi thay đổi mã giảm giá
}

// Hàm cập nhật số dư hiện tại
function updateBalance(newBalance) {
    currentBalance = newBalance; // Cập nhật số dư hiện tại
    updateTotal(); // Cập nhật tổng sau khi thay đổi số dư
}

// Gọi updateTotal khi trang được tải
document.addEventListener('DOMContentLoaded', updateTotal);


function showPaymentOptions() {
    const code45 = document.querySelector('.code_45');
    const code46 = document.querySelector('.code_46');
    const changeable_1Elements = document.querySelectorAll('.changeable_1');
    const changeable_2Elements = document.querySelectorAll('.changeable_2');


    // Ẩn phần code_45 và hiện phần code_46
    code45.style.display = 'none';
    code46.style.display = 'block';

    // Thay đổi màu của tất cả các phần tử có class "changeable"
    changeable_1Elements.forEach(element => {
        element.classList.add('changed_color_1'); // Thêm lớp CSS
    });
    changeable_2Elements.forEach(element => {
        element.classList.add('changed_color_2'); 
    });
}


function hidePaymentOptions() {
    const code45 = document.querySelector('.code_45');
    const code46 = document.querySelector('.code_46');
    const changeable_1Elements = document.querySelectorAll('.changeable_1');
    const changeable_2Elements = document.querySelectorAll('.changeable_2');

    // Hiện phần code_45 và ẩn phần code_46
    code45.style.display = 'block';
    code46.style.display = 'none';

    // Khôi phục màu
    changeable_1Elements.forEach(element => {
        element.classList.remove('changed_color_1'); // Thêm lớp CSS
    });
    changeable_2Elements.forEach(element => {
        element.classList.remove('changed_color_2'); 
    });
}

// Gán sự kiện cho nút "Trở về trước"
document.querySelector('.code_42').addEventListener('click', hidePaymentOptions);

function xacNhanThanhToan() { 
    var totalPayment = document.getElementById('totalPayment').textContent; 
    window.location.href = 'thanhtoan_logged in.html?totalPayment=' + encodeURIComponent(totalPayment);
}
