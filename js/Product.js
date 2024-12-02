document.querySelector('#buy-now').addEventListener('click', function() {
    // Hiển thị modal thông báo sản phẩm đã được thêm vào giỏ hàng
    const modal = document.querySelector('.modal-thong-bao');
    modal.style.display = 'block'; // Hiển thị modal

    // Tự động ẩn modal sau 3 giây (3000ms)
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
});

// Thêm sự kiện cho nút "Đóng"
document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.modal-thong-bao').style.display = 'none'; // Ẩn modal khi nhấn nút "Đóng"
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