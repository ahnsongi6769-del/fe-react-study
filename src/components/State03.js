import { useState } from 'react';


function State03() {

    //let arr = [1, 2, 3, 4, 5];
    let [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const btn_func = () => {
        //배열의 값추가
        //[1,2,3,4,5]
        //arr.push(9); // [1,2,3,4,5,9]
        //setArr(arr);//참조 변수라서 화면에 변화가 없음 -> 재랜더링이 발생하지않음 
        //let temp = arr; 
        let temp = [...arr]; //배열의 깊은복사
        temp.push(9);
        setArr(temp);
        console.log(arr);
    }
    return (
        <div>
            <button onClick={btn_func}>버튼~</button>
            {
                arr.map((val) => {
                    return <p>{val}</p>
                })
            }


        </div>
    )

}

export default State03