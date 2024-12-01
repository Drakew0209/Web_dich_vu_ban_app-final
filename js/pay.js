
        
        // code dòng chữ chuyển động
        
        const texts = [
            "Thiết kế dễ dàng cùng Canva Pro",
            "XBox Game Pass",
            "Giải trí cực Chill",
            "Kết nối yêu thương cùng Tinder Plus"
        ];
        
        let currentIndex = 0;
        
        // Hàm cập nhật văn bản hiển thị
        function updateText() {
            const textElement = document.querySelector('.text');
            textElement.textContent = texts[currentIndex];
        }
        
        // Hàm chuyển đến văn bản tiếp theo
        function nextText() {
            currentIndex = (currentIndex + 1) % texts.length; // Chuyển đến chỉ số tiếp theo
            updateText();
        }
        
        // Hàm chuyển đến văn bản trước
        function prevText() {
            currentIndex = (currentIndex - 1 + texts.length) % texts.length; // Chuyển đến chỉ số trước
            updateText();
        }
        
        // Gán sự kiện click cho các nút
        document.getElementById('next-btn').addEventListener('click', nextText);
        document.getElementById('prev-btn').addEventListener('click', prevText);
        
        // Tự động chuyển đổi văn bản sau mỗi 3 giây
        setInterval(nextText, 4000);
        
        // Cập nhật văn bản ban đầu
        updateText();
        

    function getQueryParameter(name) { 
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    } 

    function formatCurrency(value) { 
        return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"; 

    }

    function updateAmounts() { 
        var soTienText = document.getElementById('soTien').textContent; 
        var soTien = parseFloat(soTienText.replace(/[^\d]/g, '')); 
        var phiGiaoDich = soTien * 0.02; 
        var tongTien = soTien + phiGiaoDich; 
        document.getElementById('phiGiaoDich').textContent = formatCurrency(phiGiaoDich); 
        document.getElementById('tongTien').textContent = formatCurrency(tongTien); 
    }

    document.addEventListener("DOMContentLoaded", function() { 
        var totalPayment = getQueryParameter('totalPayment'); 
        if (totalPayment) { 
            document.getElementById('soTien').textContent = totalPayment; 
            updateAmounts(); // Cập nhật phí giao dịch và tổng tiền } });
        } 
    }); 

    document.addEventListener("DOMContentLoaded", function() { 
        var totalPayment = getQueryParameter('totalPayment'); 
        if (totalPayment) { 
            document.getElementById('soTien').textContent = totalPayment; 
            updateAmounts();
        } 
    });