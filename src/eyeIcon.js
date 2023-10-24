// 기능: password 보이기/숨기기 아이콘

let eyeIcons = document.querySelectorAll(".pwIcon");
let passwords = document.querySelectorAll(".pwContent");

eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener("click", function () {
        if (passwords[index].type === "password") {
            passwords[index].type = "text";
            eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            passwords[index].type = "password";
            eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
});
