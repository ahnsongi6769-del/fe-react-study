import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
// image import
import banner_bg from './img/banner_bg.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
//기준 data import
import foodsData from './data/foodsDate';
import { useState } from 'react';
import FoodCard from './components/FoodCard';

function FoodMarket() {

    let [foods, setfoods] = useState(foodsData);

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
                javascript 이미지 사용 
                1. css 에서는 이미지 경로 그대로 사용가능
                2. js 사용할때는 라애 참고
                react 컴포넌트 js 에서 이미지 사용 시 import 후 사용해야한다. 
                <img src = "https://...외부 url/"/>
                <img src = {import image}/>
                3. public 폴더에 이미지 저장 후 사용 할 때
                <img src ={'/images/food1.jpg}
            */}
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            {/* <div className='main-bg'></div> */}

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (<Col md={4} sm={2}>
                                <FoodCard food={food} foods={foods} index={index} />
                            </Col>)
                        })
                    }

                </Row>
            </Container>



            {/* <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content} </Card.Text>
                                <Card.Text>{foods[0].price} </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>{foods[1].title}</Card.Title>
                                <Card.Text>{foods[1].content} </Card.Text>
                                <Card.Text>{foods[1].price} </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>{foods[2].title}</Card.Title>
                                <Card.Text>{foods[2].content} </Card.Text>
                                <Card.Text>{foods[2].price} </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}

            {/* <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>카드타이틀</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )

}

export default FoodMarket;