import { useState } from "react";
import Box from "./Box";

function Props02() {
    //배열의 값이 변경되면서 -> 유지 -> 화면에 재랜더링 되려면 State로 관리해야 한다.
    let [textArr, setTextArr] = useState(['아침', '점심', '저녁']);
    let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다']);

    return (
        <div>

            <button onClick={() => {
                //야식 
                //행복하다
                let temp = [...textArr]; //깊은복사
                temp.push('야식');
                setTextArr(temp); // 참조타입 변수(배열)
                detailArr.push('행복하다');
                setDetailArr(detailArr);


                console.log(textArr);
                console.log(detailArr);

                // 재랜더링 발생시키려면 set함수를 통해서 state를 변경해줘야 한다.

            }}>내용추가버튼</button>
            {  // 아침 0 점심 1 저녁 2
                textArr.map((item, index) => {
                    //return <Box text={item} detail={detail[index]}/>
                    return <Box text={textArr[index]} detail={detailArr[index]} key={index} />
                })

            }

        </div>

    )
}



export default Props02;