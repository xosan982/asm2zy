 // Chờ cho trang HTML được tải hoàn toàn trước khi thực thi đoạn mã
 document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử chứa phần giới thiệu và tiêu đề
    const introductionSection = document.querySelector('.giới_thiệu');
    const title = document.querySelector('h1');

    // Hàm kiểm tra vị trí khi cuộn trang
    function checkScroll() {
        // Lấy vị trí của phần giới thiệu trong viewport
        const sectionPosition = introductionSection.getBoundingClientRect().top;
        // Tính vị trí của màn hình chiếu
        const screenPosition = window.innerHeight / 1.3;

        // Kiểm tra xem phần giới thiệu đã hiện ra trên màn hình hay chưa
        if (sectionPosition < screenPosition) {
            // Nếu đã hiện ra, thêm lớp 'show' để hiển thị nội dung
            introductionSection.classList.add('show');
            // Hiển thị tiêu đề
            title.classList.add('show');
        }
    }

    // Lắng nghe sự kiện cuộn trang
    window.addEventListener('scroll', checkScroll);
    // Kiểm tra vị trí ngay khi tải trang
    checkScroll();
});