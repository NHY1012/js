var hi = "hello"; // 전역변수


function greeting() {
    hi = "bye"; // 함수 안에서의 전역변수. 내용 수정 가능
}
console.log(hi); //헬로
greeting();
console.log(hi); //바인