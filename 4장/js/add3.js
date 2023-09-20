// 1부터 입력받은 수까지의 합계를 계산하여 합계를 리턴하는 함수
// 함수 선언

function calsSum(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++){
        sum = sum + i;
    }
    return sum;

}
// 정수 입력받기

let num = parseInt(prompt("정수 입력(몇 까지 더할까요?)"));

// 함수 호출하여 결과 바로 출력
document.write(`<h2>1~${num}까지의 합은 ${calsSum(num)}입니다.</h2>`);