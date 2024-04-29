
let products = [
    {type:  '마우스', price: '50000', quantity: 5},
    {type:  '키보드', price: '100000', quantity: 3},
    {type:  '모니터', price: '250000', quantity: 2},
    {type:  '노트북', price: '1550000', quantity: 1}
]; 

/*
    함수 정의
    product 배열을 전달하면, 품목 객체를 새롭게 리턴 받아보자!! 
    예시 : 품목 : 마우스, 총 가격 : 250000 
    매개변수로 마우스와 callback 함수를 전달받는 함수.
    콜백 -> 품목 이름이 넘어온 걸로 가격과 수량을 구해서 
            두 수를 곱해서 리턴해주는 친구를 만들어라!!
*/

// 내가 짠 로직
function printTotalPrice(product) {
    console.log(`품목 : ${product.type}
    총 가격 : ${product.price * product.quantity}`);
}

function checkKind(type){
    for(let  i = 0; i < products.length; i++){
        if(products[i].type === type){
            return products[i];
        }
    }
}

printTotalPrice(checkKind('마우스'));

// 강사님이 짠 로직으로 출력
function test(proName, callback){
    let total = callback(proName);
    let result = {
        품목 : proName,
        총가격 : total
    }
    return result;
}

function getTotal(proName){
    for(pro of products){
        if(pro.품목 == proName){
            return pro.가격 * pro.수량
        }
    }
}

console.log(test('마우스', getTotal));



// function print(type, call1){
//     console.log(`품목 : ${type}\n총 가격 : ${call1}` );
// }
// // 강사님이 짠 로직
// function checkType(products){
//     for(pro of products){
//         console.log(pro.품목 === '마우스');
//         if(pro.품목 === '마우스'){
//             return pro.가격 * pro.수량;
//         }
//     }
// }

// print('마우스', checkType(products));