//기본구조 

function Basic01() {

    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";

    let himsg = "";

    for (let i = 1; i <= 10; i++) {
        himsg += "안녕~";
    }
    let flag = true;
    //flag 가 true 면 hello
    //flag 가 false 면 hello2
    return(
        <div className="App">
            <h1>React Basic01</h1>
            <h2 className="font-red">hello</h2>
            { // jsx 만의 문법을 쓴다
                flag == true ? <h2>{hello}</h2> : <h2>{hello2}</h2>
            }
            {/* <h2>{hello2}</h2> */}
            {
                flag == false && <h2>{hello2}</h2>
                
            }
            {
                flag == true && <h2>{hello}</h2>
                
            }
            <h2 style={{color:'blue',fontSize:'20px'}}>{himsg}</h2>
        </div>
    );


    // if (flag == true) {
    //     return (
    //         <div className="App">
    //             <h1>React Basic01</h1>
    //             <h2 className="font-red">hello</h2>
    //             <h2>{hello}</h2>
    //             <h2 style={{ color: 'blue', fontSize: '20px' }}>{himsg}</h2>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="App">
    //             <h1>React Basic01</h1>
    //             <h2 className="font-red">hello</h2>
    //             <h2>{hello2}</h2>

    //             <h2 style={{ color: 'blue', fontSize: '20px' }}>{himsg}</h2>
    //         </div>
    //     )
    // }
}

export default Basic01