import './Quiz05.css'
import { useState } from 'react';
import ColorBox from './ColorBox';


function Quiz05() {

    let [arr, setArr] = useState(['red', 'blue', 'green', 'black', 'orange']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('red');
                    setArr(temp)
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('blue');
                    setArr(temp)
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('green');
                    setArr(temp)
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('red');
                    setArr(temp)
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('blue');
                    setArr(temp)
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('green');
                    setArr(temp);
                }}>뒤초록박스추가</button>

                <button onClick={() => {
                    arr.shift();
                    let temp = [...arr];
                    // temp.shift();
                    setArr(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    arr.pop();
                    let temp = [...arr];
                    setArr(temp);
                }}>뒷박스삭제</button>
            </div>



            {
                arr.map((item, index) => {

                    return <ColorBox bgColor={item} />;
                    //return <div className='box' style={{ backgroundColor: item }}></div>
                })
            }

        </div>
    )
}

export default Quiz05;