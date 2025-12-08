import { useState } from 'react';

//<ColorBox bgColor={'red'} />;
//props = {bgColor : 'red'}
function ColorBox(props){

        
    return(

        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={()=>{ // splice 함수 인덱스위치 , 1개 삭제 -> 삭제한것을 원본데이터에 반영 -> 
                                    //원본배열, set 배열함수 필요 -> 원본반영 + 재랜더링 필요
                    (props.arr).splice(props.index,1); 
                    let temp = [...props.arr];
                    props.setArr(temp); }}>X</button>

                    


        </div>
    )

}

export default ColorBox;