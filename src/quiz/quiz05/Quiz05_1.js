import './Quiz05.css'
import { useState } from 'react';
import ColorBox from './ColorBox';


function Quiz05_1() {

    let [arr, setArr] = useState([1, 2, 3, 4])

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [1, ...arr];
                    setArr(temp)

                    //let temp = [...arr];
                    //temp.unshift(1);
                    //setArr(temp)
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [2, ...arr];
                    setArr(temp)
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [3, ...arr];
                    setArr(temp)
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...arr]; // [...arr,1] 해도 temp.push(1) 적는것과 동일
                    temp.push(1);
                    setArr(temp); // 리랜더링을 하려면 필수
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push(2);
                    setArr(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push(3);
                    setArr(temp);
                }}>뒤초록박스추가</button>

                <button onClick={()=>{
                    arr.shift();
                    let temp = [...arr];
                    // temp.shift();
                    setArr(temp);
                }}>앞박스삭제</button>
                <button onClick={()=>{
                    arr.pop();
                    let temp = [...arr];
                    setArr(temp);
                }}>뒷박스삭제</button>
            </div>



            {
                arr.map((item,index) => {

                    if (item == 1) {
                        return <ColorBox arr={arr} setArr={setArr} index={index} bgColor='red'/>
                    } else if (item == 2) {
                        return <ColorBox arr={arr} setArr={setArr} index={index} bgColor='blue'/>
                    } else if (item == 3) {
                        return <ColorBox arr={arr} setArr={setArr} index={index} bgColor='green'/>
                    } else {
                        return <ColorBox  arr={arr} setArr={setArr} index={index} bgColor='black'/>
                    }
                })

                
            }

        </div>
    )
}

export default Quiz05_1;