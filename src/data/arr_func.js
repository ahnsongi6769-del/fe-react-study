

console.log('javascript arr 관련 함수');

let arr = [10,20,30,40];

//js 유용한 함수 
//1)map 이라는 함수 
arr.map(()=>{ // 배열의 요소들 갯수 만큼 반복실행하면서 return 의 형태가 가능한 함수
    console.log('arr map');

})

arr.forEach((item)=>{ // arr 만큼 반복문 수행
    console.log('forEach'+ item);
})

arr.map((item)=>{ 
    console.log('arr map'+ item);
})
arr.map((item,index)=>{ // 매개변수 2개 item 배열값 index 인덱스 값 주입 반복
    console.log('arr map item:' + item + 'index:'+index);

})


let result1 = arr.map(()=>{
                return 99;
                }) 
console.log(result1);

let result2 = arr.map((item)=>{
                console.log(item);
                }) 
console.log(result2);

let result3 = arr.map((item)=>{
                return item + 100;
                }) 
console.log(result3);

let result4 = arr.map((item)=>{
                return '가지고 있는 값'+ item ;
                }) 
console.log(result4);

let menuArr = ['우동','라면','김밥'];
let result5 = menuArr.map((menu)=>{
return '<p>'+ menu + '</p>';
})
console.log(result5);
                            // 화살표 옆에 중괄호 없이 바로 데이터를 쓰면 return했다라는걸로 인식
let result6 = menuArr.map((menu)=>'<p>'+ menu + '</p>')
console.log(result6);

//2) filter 함수  우리가 원하는 조건에 맞는 결과만 리턴할 수 있음
arr = [10,20,30,40];
// 실행 결과가 참인 결과만 return
let result7= arr.filter((value)=>{
    return true;
})
console.log(result7);

let result8= arr.filter((value)=>{
    return value > 10;
})
console.log(result8);

let result9= arr.filter((value)=>{
    return value == 30;
    //return value != 30;
})
console.log(result9);

//3)find

let result10= arr.find((value)=>{ // 못찾으면 undefined
    return value == 20;
})
console.log(result10);

//4)findIndex
let result11= arr.findIndex((value)=>{ // 못찾으면 -1
    return value == 130;
})
console.log(result11);

//return
//구조 분해 할당 (Destructuring Assingnment)
let arr2 =[10,20,30];
console.log(arr2[2]);

let [n1,n2,n3] = [77,88,99];
console.log(n1,n2,n3);

let[num,setNum] = [77,88];

let obj = {
    num1 : 30,
    num2 : 50
}

let obj2 = obj;
console.log(obj2.num1);

let {num1,num2} = obj;
console.log(num1,num2);