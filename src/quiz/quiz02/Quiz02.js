import { useState } from "react";

function Quiz02() {
    let texts =['하나', '둘', '셋'];
    let [index,setIndex] = useState(0);


    return(
        <div className="App">
            <p>{texts[index]}</p>
            <button onClick={()=>{
                setIndex( (index + 1) % texts.length );

            }}>변경버튼</button>
            
        </div>
    )
}

export default Quiz02;