import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './Detail.css'

function Detail({ foods }) {

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    let [viewStatus, setViewStatus] = useState('');

    let [modalShow,setModalShow] = useState(true); // 모달창 표시 여부 

    // path="/detail/:productNumber"
    // let { productNumber } = useParams(); //경로에 있는 값 읽어오기

    // path="/detail/:id"
    // 저 경로에 붙어있는 :id 위치에 뭐가 들어왔느냐

    let { id } = useParams(); //경로에 있는 값 읽어오기
    console.log(id);
    //id : fd001

    // id를 확인 -> foods 배열데이터에서 id값이 같은 food 를 찾고 -> 이 food를 화면에 표시

    let food = foods.find((item) => {
        return item.id == id;
    })
    //food.title

    let foodIndex = foods.findIndex((item) => {
        return item.id == id;
    })
    //foods[foodIndex].title

    //useEffect (실행할 함수, 의존성배열)
    //useEffect (실행할 함수)
    //useEffect (실행할 함수 {return ()=>{clean up function}, 의존성 배열)

    useEffect(() => {
        console.log('useEffect 실행 (의존성 배열 없음)');
        // 의존성 배열이 없다는건 로딩에되는 매번 실행
    });
    useEffect(() => {
        console.log('useEffect 실행, []빈 의존성 배열');
        // 빈배열은 -> 로딩 1회 실행
    }, []);
    useEffect(() => {
        console.log('useEffect 실행, [orderCount] 의존성 배열');
        return () => { // clean up function 
            console.log('useEffect 실행, [orderCount] -> return 실행');
        }
    }, [orderCount]); // 의존성 배열에 값 존재하는 경우
    useEffect(() => {
        console.log('useEffect 실행, [test] 의존성 배열');
    }, [test]); // 의존성 배열에 값 존재하는 경우

    useEffect(() => {

        console.log('setViewStatus end 처리');

        setTimeout(() => {
            setViewStatus('end');
        }, 300) // 랜더링이 되는 와중에도 값이 변하지 않으려면 state 변수 사용해야함 
    }, [])

    //modal 창 안보이게 적용
    useEffect(()=>{
        //modal show  true -> false 2초
        let tmout = setTimeout(()=>{
            setModalShow(false);
        },2000); // ms 2초

        //setTimeout
        //setInterval
        // 비동기 작동 방식 

        //clearInterval
        //clearTimeout
        return()=>{
            clearTimeout(tmout);
        }
    },[])


    if (food == undefined || food == null) {
        return (
            <div>
                <h1>없는 상품입니다.</h1>
                <h2>잘못된 접근.</h2>
            </div>
        )
    }


    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>


            <Modal show={modalShow} onHide={()=>{setModalShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>환영합니다~ </Modal.Title>
                </Modal.Header>
                <Modal.Body>음식을 주문해주세요 ~ </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{setModalShow(false)}} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    )

}

export default Detail;