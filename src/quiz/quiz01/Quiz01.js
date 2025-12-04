import { useState } from "react";

function Quiz01() {
    let [count, setCount] = useState(0);


    //let num = 0;
    return (
        <div>
            <button onClick={() => {
                setCount(count + 2)
            }}>짝수출력</button>
            <span style={{ color: 'red' }}>{count}</span>

        </div>
    )
}

export default Quiz01