document.addEventListener("DOMContentLoaded", function () {
    const buyNowButton = document.getElementById("buy-now");
    const addToCartButton = document.getElementById("add-to-cart");
    const toast = document.getElementById("toast");

    function showToast() {
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); // Thông báo hiển thị trong 3 giây
    }

    buyNowButton.addEventListener("click", showToast);
    addToCartButton.addEventListener("click", showToast);
});


document.querySelector('.toggle-button').addEventListener('click', function() {
    var additionalContent = document.querySelector('.additional-content');
    if (additionalContent.style.display === 'none') {
        additionalContent.style.display = 'block';
        this.textContent = 'Ẩn bớt'; // Thay đổi nội dung nút
    } else {
        additionalContent.style.display = 'none';
        this.textContent = 'Xem thêm'; // Thay đổi nội dung nút
    }
});