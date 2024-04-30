let scores = [100, 80, 90, 75, 65, 45, 49];
console.log(scores);

scores.push(500);
console.log(scores);

scores.pop();
console.log(scores);

scores.forEach(score=>{
    console.log(score);
});

console.log();
scores.forEach(function (score) {
    console.log(score);
});

// filter
let awesome = scores.filter(score => {
    return score >= 80;
});

console.log(awesome);

// map
// 점수를 보고 등급 나누기
// scores에 있는 배열요소를 콜백함수의 매개변수로 넘긴다.
let grades = scores.map(getGrade);
console.log(grades);

function getGrade(score){
    let result;
    if(score >= 90) {
        result = 'A';
    }else if(score >= 70){
        result = 'B';
    }else{
        result = 'C';
    }

    return result;
}


