import './Quiz04.css'
import { useState } from 'react';
import Box02 from './Box02';

function Quiz04() {

    let [arr, setArr] = useState([0, 0]);

    let [boxes,setBoxes] = useState([<Box02/>,<Box02/>])

    return (
        <div>
            <button onClick={() => { //버튼을 누를때마다 배열이 하나씩 늘어나면서 재랜더링이 될 수 있도록 한다.
                // arr 배열의 길이를 늘려주기
                let temp = [...arr]; // 깊은복사
                temp.push(0);
                setArr(temp);
            }
            }>추가</button><br></br><br></br>
            {/* <div className='box'>박스</div>
            <div className='box'>박스</div> */}

            {
                arr.map(() => {
                    return <Box02 />
                })
            }

            {
                boxes
            }

        </div>

    )
}

export default Quiz04;