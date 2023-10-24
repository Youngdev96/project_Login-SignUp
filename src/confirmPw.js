// 기능: 비밀번호 동일 여부 확인

let confirmMsg = document.getElementById("confirmMsg");
const correctColor = " #e6ebf4";
const wrongColor = "#ff6ac9";

function checkPassword() {
    let password = signUpPwEl.value;
    let confirmPassword = confirmPwEl.value;

    if (password === confirmPassword) {
        confirmMsg.innerHTML = "비밀번호가 일치합니다.";
        confirmMsg.style.color = correctColor;
    } else {
        confirmMsg.innerHTML = "비밀번호가 일치하지 않습니다.";
        confirmMsg.style.color = wrongColor;
    }
}

confirmPwEl.addEventListener("input", checkPassword);
