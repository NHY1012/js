const factor = 5;

function calc(){
    return num * factor; // 오류 발생
}

{
    const num = 10; // 이 블록에서만 사용 가능한 num
    let result = calc();
    console.log(`result: ${result}`);
}

// var 변수 보다는 let, const 변수를 사용하는 것이 안전하다. 재선언이 가능하다는 건 값을 바꿀 수 있기 때문에 위험.
// 프로그램에서 값이 변하지 않는다면 const를 사용하는 것이 좋음.
// 객체를 선언할 때는 const를 선언하면 객체 자체가 바뀌지 않는다.