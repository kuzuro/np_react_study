import math, { PI as PINUM, getSum } from "./lib.mjs";

let PI = 3.141592;

// 최신문법의 기준 ES6(2015년 기준)

/* 
    1. var 문제점
        1) 중복 선언이 가능하다. => '의도하지 않게' 값이 변경될 수 있어서 예상치 못한 오류가 발생한다.
        2) 변수 호이스팅(끌어올림)이 발생한다. => 변수 선언 이전에 참조가 된다. 변수 초기화시 undefined가 할당된다.
        3) 블록 레벨 스코프(유효범위)를 지원하지 않는다.

*/

console.log(num); // 호이스팅

var num = 10;
console.log(num);

var num = 30; // 중복 선언
console.log(num);

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(10));
console.log(num);

if (true) {
  var num = 100;
  var num02 = 200; // 블록 레벨 스코프를 지원하지 않기 때문에 전역 변수 num02가 생성된다.
  console.log(num);
}

console.log(num, num02);

if (true) {
  //console.log(num03);  // 선언 이전에 참조 불가능 => 엄밀히 말하면 호이스팅 자체는 일어난다. => TDZ 문제
  let num03 = 10;
  //let num03 = 20;  // 중복 선언 불가능
}

//console.log(num03);  // 블록 레벨 스코프를 지원하기 때문에 전역 변수가 생성되지 않는다.

const TAX = 10; // Constant (상수) => 값을 무조건 초기화시켜야한다.
//TAX = 100;  // 상수이기 때문에 재할당 불가능

console.log("세율이 " + TAX + "% 입니다.");

// 템플릿 리터럴 : ``(백틱, 그레이브) 안에 표현식${} 을 포함시킬 수 있다.
console.log(`세율이 ${TAX + 10 / 2}% 입니다.`);

/*
    화살표 함수 (Arrow function)
        1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 사용한다.
        2) 코드블록을 생략하면 리턴을 생략할 수 있다.
            - 코드블록과 객채는 동일하게 {}를 사용하기 때문에, 객체인 경우 소괄호()로 한번 더 감싸야한다.
        3) this 바인딩이 되지 않는다.
*/
/*
let divide = (a, b) => {
  return a / b;
};
*/
let divide = (a, b) => a / b;

console.log(`10 / 2 = ${divide(10, 2)}`);

setTimeout(() => {
  console.log("2초 경과");
}, 2000);

let getObj = (name, age) => {
  return {
    //name : name,  // 키값과 식별자가 동일하면 생략 가능
    name,
    age,
  };
};

let getObj2 = (name, age) => ({ name, age }); // 블록

let user = {
  name: "hyun",
  age: 30,

  hello: () => {
    // 화살표 함수를 사용하면 this가 바인딩 되지 않는다.
    //console.log(this.name, this.age);
  },
};

user.hello();

/* 
    비구조화 할당
        - 객체나 배열의 값을 간결하게 할당할 수 있다.
            1) 객체는 변수 선언을 중괄호{} 안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 된다.
            2) 배열은 [] 안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
                => 객체 비주고할당에 비해 변수명을 자유롭게 지을 수 있다.
                훅을 사용할 때 주로 사용함...
*/

//let name = user.name;
//let age = user.age;

let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["hyun2", 30, "apple", function () {}];
let [name02, age20, fruit, func] = arr;

console.log(name02, func);

/* 
    펼침 연산자(스프레드)
        1) 배열이나 객체를 나열하는 효과가 있다. => 기존값을 복사하고, 새로운 값을 추가 및 변경하는데 유용하다.
        2) 복사할 경우 참조값 복사가 아니라 값 자체를 옮길 수 있기 때문에 불변성을 지킬 수있다. **
            => 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.
*/

let copy = user;
let copy02 = { ...user, done: true, name: "korean" };
copy02.age = 31; // 객체는 참조값을 복사해온더,
console.log(user, copy02, user === copy02);

let copyArr = [1, ...arr, false];
console.log(copyArr);

let numArr = [1, 2, 10, 5, 7];
let max = Math.max(...numArr);
console.log(max);
console.log(numArr);

console.log(PINUM);
console.log(getSum(1, 2));

console.log(math.PI);



/* 
  Promise
    - Promise는 비동기 처리를 위한 객체이다. => 서버에서 데이터를 받아 올 때
    - Promise 생성자의 매겨변수로 resolve, reject 함수를 받는다. => 그 함수에 두개의 함수가 전달된다.
      => resolve : 비동기 처리가 성공했을 때 호출되는 함수. resolve값을 Promise.prototype.then()의 콜백함수의 인자로 전달한다.
      => reject : 비동기 처리가 실패했을 때 호출되는 함수. reject값을 에러 메시지로 전달한다. then()이 아니라 catch()로 처리한다.
*/

let num04 = 5;
let promise = new Promise(function(resolve, reject) {
  //resolve(1);
  //reject("에러 발생")

  if(num04 < 10) {
    reject("숫자가 10보다 작습니다");
  }

  resolve(num04);
});

promise
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });


function getData(str) {

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(str);
    }, 2000);
  });

}


function getId(id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(id);
    }, 2000);
    
  });
}


// Promise가 중첩되면 복잡해진다. async, await를 사용하면 간단하게 처리할 수 있다.
getData("자바스크립트")
  .then(function(res) {
    return getId(1);
  })
  // then의 리턴이 getId이므로 아래의 then은 getId의 결과를 받는다.
  .then((res) => {

  })

  .catch(function(err) {

  });


/*  
  async, await
    - 함수 키워드 앞에 async를 붙인다.
    - await을 앞에 붙이면 resolve될 때 까지 다음 코드를 실행하지 않는다.
      => 비동기를 동기처럼 순서를 제어하기 쉽다.
    - try/catch문을 통해 에러를 처리할 수 있다.

    서버를 통해 데이터를 받아오면 그냥 Promise인갑다~ 라고 생각하면 된다.

    - Promise.all 등을 통해 병렬적으로 처리할 수 있다.
    - async 함수는 return 값을 resolve하는 프로미스로 반환한다.
*/
async function fetchData() {

  try {

    // 각각 받아오며 순차적으로 동작해야 할 때
    let data = await getData("JS");  // getData의 반화값은 promise
    let id = await getId(101);

    // 별개의 api 여러개에게 보낼때
    let result = await Promise.all([getData("JS"), getId(101)]);  // 각각 작업되던걸 병렬적으로 처리한다.
    

    console.log(result)

  } catch(err) { 
    console.log(err);
  }

  return 1;

}

console.log(fetchData());



// 삼항 연산자 : 조건식 ? 참 : 거짓
let result02 = num04 < 10 ? "10보다 작습니다" : "10보다 크거나 같습니다";
console.log(result02);

// 단축 평가
let color = num04 > 10 && "red";


// && 연산자는 앞의 값이 truthy라면 뒤의 값으로 평가되고, falsy라면 false로 평가된다.
console.log("color : " + color);

let color2 = "131grd" && "red";
console.log("color2 : " + color2);


// || 연산자는 앞의 값이 truthy라면 앞의 값으로 평가되고, falsy라면 뒤의 값으로 평가된다.
let str = "12eeff" || "안녕하세요";
console.log(str);

let str2 = "" || "안녕하세요";
console.log(str2);


// ?? (nullish) : null, undefined면 뒤의 값으로 평가된다. 그외에는 앞의 값으로 평가된다.
//  => 값을 참조해봐서 있으면 사용하고, 없으면 대신 사용 할 값을 작성
// 2020년 11월에 추가됨
let value = user.height ?? "할당되지 않은 값";

console.log(value);


// ?. 옵셔널 체이닝 : 참조한 객체의 값이 null이거나 undefined인 경우 뒤의 프로퍼티를 평가하지 않는다.
console.log(undefined?.age);


console.log("======================");

// 배열 고차 함수 : 함수를 전달받거나 반환하는 함수
let userList = [
  {
    id : 1,
    name : "seok",
    age : 30
  },
  {
    id : 2,
    name : "hwangbo",
    age : 40
  },
  {
    id : 3,
    name : "misu",
    age : 20
  },
  {
    id : 4,
    name : "minseok",
    age : 39
  },
];


// Array.pototype.forEach : 배열을 순회하며 각 값을 인자로 함수를 반복 실행

userList.forEach((user) => {
  console.log(user);
});



// Array.pototype.filter : 배열을 순회하며 각 값을 인자로 함수를 반복 실행하여 true인 값만 '반환'. 원본 배열을 변경하지 않는다.
let fillterArr = userList.filter((user) => {     
  //console.log(user);
  return user.age >= 30;
});

console.log(fillterArr)


// 짝수번째 요소만 모으기
let fillterArr02 = userList.filter((user, idx) => {     
  //console.log(user);
  //return user.id % 2 === 0;
  return (idx+1) % 2 === 0;
});

console.log(fillterArr02)


// 간결하게. 사용하지 않는 인자는 _ 로 표시
let fillterArr03 = userList.filter((_, idx) => (idx+1) % 2 === 0);
console.log(fillterArr03);


// Array.pototype.map : 배열을 순회하며 각 요소에 변형을 줄 때 사용. 기존 배열 변경 x
let mapArr = userList.map(user => { 
  //return 1;  // user의 갯수가 개이므로, 1 4개로된 배열 반한

  return user.age;  // user의 age만 모아서 배열로 반환
});

console.log(mapArr);


console.log("======================");


// age가 30 이상인 user의 name만 모아서 배열로 반환
let nameArr =  userList.filter(user => user.age >= 30);
console.log(nameArr);
console.log(nameArr.map(user => user.name));


console.log("======================");

// 위의 코드를 한줄로
let nameArr02 =  userList.filter(user => user.age >= 30).map(user => user.name);
console.log(nameArr02);



console.log("======================");


// Array.prototype.reduce : 배열을 순회하며 누산을 할 때 
let ageArr = userList.map(user => user.age);


// acc 누적값, curr 현재 값
let totalAge = ageArr.reduce((acc, curr) => acc + curr, 100);  // 100은 acc의 시작값

console.log(totalAge);



// find fillter와 사용법은 같으나, 반환값이 다름. find는 처음 찾은 값을 반환

let nameArr03 =  userList.find(user => user.age >= 30);
console.log(nameArr03);


console.log("======================");


// rest 문법 : 인자가 몇개가 올지 모를때 사용, 값은 배열로 받음
// 무조건 매개변수의 마지막에 사용 해야함
function getTotal(...numList) {
  return numList.reduce((acc, curr) => acc + curr, 0);
}


console.log(getTotal(1,2,3,4,5,6,7,8,9,10));
console.log(getTotal(1,2,3));



console.log("~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~");