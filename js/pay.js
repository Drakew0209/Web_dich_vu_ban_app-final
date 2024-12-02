

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

function toggleDisplay() {
    const myDiv = document.getElementById('myDiv');
    const otherDiv = document.getElementById('otherDiv');

    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block'; // Hiển thị myDiv
        otherDiv.style.display = 'none'; // Ẩn otherDiv
    } else {
        myDiv.style.display = 'none'; // Ẩn myDiv
        otherDiv.style.display = 'block'; // Hiển thị otherDiv
    }
}
