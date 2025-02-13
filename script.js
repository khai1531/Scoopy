// JavaScript to toggle feature groups
document.querySelectorAll(".feature-group-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all
    document
      .querySelectorAll(".feature-group-toggle")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".feature-list")
      .forEach((list) => list.classList.remove("active"));

    // Add active class to the clicked button and its list
    button.classList.add("active");
    button.nextElementSibling.classList.add("active");
  });
});

// JavaScript to update left section with feature details
document.querySelectorAll(".feature-item").forEach((item) => {
  item.addEventListener("click", () => {
    const featureImage = item.querySelector("img").getAttribute("src");
    const featureText = item.querySelector("p").innerText;

    document
      .querySelector(".review-left img")
      .setAttribute("src", featureImage);
    document.querySelector(".review-left h3").innerText = featureText;

    // Mô tả chi tiết từng tính năng
    const descriptions = {
      "Đèn trước Full LED":
        "Honda Scoopy sở hữu đèn chiếu sáng LED to, được lấy cảm hứng từ những viên pha lê. Đèn xi-nhan bố trí 2 bên tạo điểm nhấn đặc trưng chỉ có trên Scoopy.",
      "Đồng hồ bán Analog":
        "Màn hình đồng hồ kết hợp giữa Analog và Digital hiển thị đầy đủ thông tin cần thiết.",
      "Khung eSAF":
        "Công nghệ khung eSAF giúp giảm trọng lượng xe nhưng vẫn đảm bảo độ bền và chắc chắn.",
      "Cốp xe rộng":
        "Dung tích cốp rộng giúp bạn dễ dàng chứa các vật dụng cá nhân.",
      "Bánh xe 12 inch":
        "Bánh xe kích thước 12 inch giúp xe vận hành êm ái trên mọi địa hình.",
      "Động cơ PGM-FI":
        "Công nghệ phun xăng điện tử PGM-FI giúp xe tiết kiệm nhiên liệu hơn.",
      "Phanh ABS": "Hệ thống phanh ABS giúp tăng cường an toàn khi phanh gấp.",
      "Đèn LED cảm biến":
        "Hệ thống đèn LED tự động bật khi phát hiện trời tối.",
      "Khóa Smart Key":
        "Công nghệ khóa thông minh giúp tăng cường bảo mật và tiện lợi khi sử dụng.",
    };

    document.querySelector(".review-left p").innerText =
      descriptions[featureText] || "Thông tin chi tiết chưa có";
  });
});
