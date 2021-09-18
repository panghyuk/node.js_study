function first(){
    second();
    console.log('첫 번째');
}

function second(){
    third();
    console.log('두 번째');
}

function third(){
    console.log('세 번째');
}

first();

// 세 번째 -> 두 번째 -> 첫 번째


function run(){
    console.log('3초 후 실행');
}

console.log('시작');
setTimeout(run,3000);
console.log('끝');

// 시작 -> 끝 -> 3초 후 실행

function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    },0)
    new Promise((resolve)=> {
        resolve('hi');
    })
    .then(console.log); // 비동기
    oneMore();
}

setTimeout(run,5000);

// run run -> one more -> hi -> wow
// promise.then 우선 순위

if (true) {
    var x = 3;
}

console.log(x);

if (true) {
    const y = 3; 
}

console.log(y); // 에러 발생


var won = 1000;
var result = "이 과자는 " + won + '원입니다.';

const result = `이 과자는 ${won}원입니다.`

// 화살표 함수
function add1(x,y) {
    return x+y;
}

const add2 = (x,y) => {
    return x+y;
}

const add3 = (x,y) => x+y;

const add4 = (x,y) => (x+y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

// ex1
var relationship1 = {
    name:'zero',
    friends: ['nero','hero','xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name,friend);
        });
    },
};

relationship1.logFriends();

// ex2
const relationship2 = {
    name:'zero',
    friends: ['nero','hero','xero'],
    logFriends() {
        this.friends.forEach(function (friend) {
            console.log(this.name,friend);
        });
    },
}

relationship2.logFriends();

// 구조분해 할당
const example = {a : 123, b : {c : 135, d : 146}}
const a = example.a;
const d = example.b.d;

const {a, b : {d}} = example;
console.log(a); // 123
console.log(d); //146

// ex1
var candyMachine = {
    status: {
        name:'node',
        count:5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 클래스
