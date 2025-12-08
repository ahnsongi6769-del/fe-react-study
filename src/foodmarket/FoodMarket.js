import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
// image import
import banner_bg from './img/banner_bg.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import food1 from'./img/food1.jpg';
import food2 from'./img/food2.jpg';
import food3 from'./img/food3.jpg';

function FoodMarket() {

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
                react 컴포넌트 js 에서 이미지 사용 시 import 후 사용해야한다. 
                <img src = "https://...외부 url/"/>
                <img src = {import image}/>
            */}
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            {/* <div className='main-bg'></div> */}

            <Container>
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
            </Container>
        </div>
    )

}

export default FoodMarket;