let now = new Date();
console.log(now); // 2024-05-02T10:19:54.987Z
// T : Time

let specifiedDate = new Date(2024, 4, 5, 12, 30, 30);
// console.log(specifiedDate);

let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let date = now.getDay();

let dates = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

console.log(`현재 날짜 시간 정보 : ${year}-${month + 1}-${day} ${dates[date]}`);

console.log(now.toDateString()); // 현재 날짜 정보 (요일 월 일 연도)
console.log(now.toTimeString()); // 나라에 따라 시간 정보가 다름
console.log(now.toISOString().slice(0, 10));

console.log(Math.floor(5.3));