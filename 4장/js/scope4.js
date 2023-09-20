var hi = "hello"; // 전역변수


function greeting() {
    var hi = "bye"; // 함수 안에서만 사용 가능한 지역변수.
}
console.log(hi); //헬로
greeting();
console.log(hi); //헬로