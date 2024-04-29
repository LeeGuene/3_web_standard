// console.log('===== 전역 스코프 =====');
// var data1 = 49;

// function func1(){
//     console.log('함수 안의 데이터 : ' + data1);
//     console.log(`함수 안의 데이터 : ${data1}`);
// }

// func1();
// console.log(`함수 안의 데이터 : ${data1}`);

// console.log('===== 지역 스코드 =====');
// function func2(){
//     // 함수 내부에 선언
//     var data2 = 49;
//     console.log('함수 안의 데이터 : ' + data2);
//     console.log(`함수 안의 데이터 : ${data2}`);
// }

// // 함수 외부에서 사용 불가
// func2();
// console.log(`함수 안의 데이터 : ${data2}`);

// let temp1 = 94;
// console.log('===== 블록(키워드 let) 스코드 =====');
// {
//     let temp2 = 49;
//     console.log('함수 안의 데이터 : ' + temp1);
//     console.log(`함수 안의 데이터 : ${temp2}`);
// }

// 블록 외부에서 사용 불가
// console.log('함수 밖의 데이터 : ' + temp1);
// console.log(`함수 밖ㄴ의 데이터 : ${temp2}`);

// var temp1 = 94;
// console.log('===== 블록 스코드(키워드 var) =====');
// {
//     var temp2 = 49;
//     console.log('함수 안의 데이터 : ' + temp1);
//     console.log(`함수 안의 데이터 : ${temp2}`);
// }

// // 블록 외부에서 사용 가능
// console.log('함수 밖의 데이터 : ' + temp1);
// console.log(`함수 밖ㄴ의 데이터 : ${temp2}`);

