import './NewsBlog.css';
import { use, useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //하드코딩(텍스트를 직접) vs  변수  vs state변수
    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    let [likeCount, setLikeCount] = useState(0);


    let [modalFlag, setModalFlag] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);
    let [inputText,setInputText] =useState('');

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>


            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag); //모달창 표시 On/Off 여부
                                //어떤 뉴스를 눌렀는지 그 뉴스 제목 -> 저장 ---> Modal props 전달
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);
                            }}>{news[index]}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [...likeCountArr];
                                    temp[index] += 1;
                                    setLikeCountArr(temp);
                                }}> ❤</span> {likeCountArr[index]}
                            </h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            {
                /* modalFlag == true ? <Modal/> : null */
            }

            <button onClick={() => {
                //'Today News'
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>첫글 제목 변경</button>
            <div>
                <input type='text' id = "input_news_title" value={inputText} onChange={(event)=>{
                    //console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }}/>
                <button onClick={()=>{
                    inputText = inputText.trim(); // 앞뒤공백 제거
                    //setInputText(inputText.trim()); // 랜더링 되면서 앞뒤공백제거

                    if(inputText == '') {
                        alert('값을 입력하세요')
                        setInputText('');
                            return;
                        
                    }

                    let temp = [...news];
                    temp.push(inputText);
                    likeCountArr.push(0)
                    setNews(temp);
                    setInputText('');

                    //input창에 입력된 value를 -> news 배열 뒤에 push 추가

                    // html css js 스타일
                    // let title = document.getElementById('input_news_title').value;

                    // let temp = [...news];
                    // temp.push(title);
                    // setNews(temp);

                    // document.getElementById('input_news_title').value = '';
                }}>발행</button>
            </div>

            {
                modalFlag && <Modal news={news} setNews={setNews} bgColor={'lightblue'}
                    title={selectedTitle} likeCount={selectedLikeCount} />
            }

        </div>
    )
}

export default NewsBlog;