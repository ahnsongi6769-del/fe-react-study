function Box01({text,detail}) { 
    // props = {text: '아침', detail: '배고프다'}
    //{ text, detail } = {text: '아침', detail: '배고프다'}
    return(
    <div>
        <h1>제목 : {text}</h1>
        <p>내용 : {detail}</p>
        <hr/>
    </div>
    )
}

export default Box01;