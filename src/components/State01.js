import { useState } from "react";


function State01() {
    //React Hooks
    //useState - > 상태를 저장하는 변수 , 재랜더링이 되는 상황에서도 값이 계속 유지

    //State 변수 값이 set 함수를 통해서 변경된 경우 -> 화면 리랜더링 


    let cnt = 0; // 일반변수 -> 재랜더링 시점에 다시 호출되서 또 초기화가 됨 (값 유지 X)
    //const ,let [변수명, set 함수명] = useState(초기값);

    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0)

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={() => {
                console.log('cnt증가버튼 클릭됨');
                cnt++;
                console.log(cnt);

                //num 끼워넣기 
                num++;
                console.log(num);
            }
            }>cnt증가버튼</button>

            <br></br>

            <p>{count}</p>
            <button onClick={() => {
                console.log('count증가버튼 클릭됨');
                //count++; -> 값은 바뀔지라도 리랜더링이 일어나지 않음 set 함수를 통해서 작성해야함
                setCount(count + 1); //재랜더링 발생 !
                setNum(num); //재랜더링 발생조건이 맞지만 -> 인근에 있는 재랭더링 요소를 모아서 한번에 수행!
                console.log(count);
            }}>count 증가 버튼</button>
        </div>
    )
}


export default State01;