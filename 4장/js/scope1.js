function sum(num1, num2) {
    var result = num1 + num2; // 지역 변수(지역스코프)
}
sum(10, 20);
console.log(result); // 오류 발생 선언 된 변수의 수가 없음.