import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';


function NewsBlog() {
    // 하드코딩 (텍스트를 직접입력) vs 변수 vs state변수
    let title = "React Study ";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    
                    setModalFlag(!modalFlag); // true -> false , !false -> true
                    
                    //setModalFlag( modalFlag ? false : true );

                    // if(modalFlag==true){
                    //     setModalFlag(false);
                    // }else{
                    //     setModalFlag(true);
                    // }
                }}>{news[0]}
                    <span onClick={(event)=>{
                        event.stopPropagation(); // 상위요소로 이벤트 전파 차단
                    setLikeCount(likeCount + 1); 
                }}>❤️</span>{likeCount}
                </h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용</p>
            </div>

            {/* <div className='post-list'>
                <h4>{news1}</h4>
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
                // modalFlag == true ? <modal/> : null
                modalFlag && <Modal />  
            }

        </div >
    )
}

export default NewsBlog;