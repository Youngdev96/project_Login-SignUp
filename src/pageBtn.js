// 기능 1. signUp 버튼 클릭 시, 로그인 창과 회원가입 창 전환 하는 기능

const signUpBtn = document.querySelector(".signUpBtn");
const loginContainer = document.querySelector(".loginContainer");
const registerBtn = document.querySelector(".registerBtn");
const signUpContainer = document.querySelector(".signUpContainer");

signUpBtn.addEventListener("click", function () {
    if (loginContainer.getAttribute("id") === "show") {
        loginContainer.setAttribute("id", "hide");
        signUpContainer.setAttribute("id", "show");
    }
});

// 기능 2. register 버튼 클릭 시,
// 비밀번호 중복확인, 양식에 있는 값을 모두 작성하였는지 확인 후 로그인 창으로 넘어가게 만드는 기능

const idEl = document.querySelector("#signUpId");
const nameEl = document.querySelector("#signUpName");
const birthYearEl = document.querySelector("#birthYear");
const birthMonthEl = document.querySelector("#birthMonth");
const birthDayEl = document.querySelector("#birthDay");
const signUpPwEl = document.querySelector("#signUpPw");
const confirmPwEl = document.querySelector("#confirmPw");

registerBtn.addEventListener("click", function () {
    let idValue = idEl.value;
    let nameValue = nameEl.value;
    let birthYearValue = birthYearEl.value;
    let birthMonthValue = birthMonthEl.value;
    let birthDayValue = birthDayEl.value;
    let signUpPwValue = signUpPwEl.value;
    let confirmPwValue = confirmPwEl.value;
    let confirmMsgValue = confirmMsg.value;

    // 조건 1: 양식을 전부 작성했는지 확인
    if (
        idValue !== "" &&
        nameValue !== "" &&
        birthYearValue !== "" &&
        birthMonthValue !== "" &&
        birthDayValue !== "" &&
        signUpPwValue !== "" &&
        confirmPwValue !== ""
    ) {
        // 조건 2. 비밀번호 중복 확인
        if (signUpPwValue === confirmPwValue) {
            alert("회원가입이 완료되었습니다.");
            if (signUpContainer.getAttribute("id") === "show") {
                signUpContainer.setAttribute("id", "hide");
                loginContainer.setAttribute("id", "show");
            }
        } else alert("비밀번호를 확인해주세요.");
    } else alert("서식을 모두 입력해주세요.");
});
