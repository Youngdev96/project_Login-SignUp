// 기능: 생년월일 select 태그 옵션 생성

// 연도 옵션 추가
let yearSelect = document.getElementById("birthYear");
for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 80; i--) {
    let option = document.createElement("option");
    option.text = i;
    yearSelect.add(option);
}

// 월 옵션 추가
let monthSelect = document.getElementById("birthMonth");
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.text = i;
    monthSelect.add(option);
}

// 일 옵션 추가
let daySelect = document.getElementById("birthDay");
for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.text = i;
    daySelect.add(option);
}
