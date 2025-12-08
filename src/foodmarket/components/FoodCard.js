import { Button,Card } from "react-bootstrap";
import food1 from '../img/food1.jpg';
import { useNavigate } from "react-router";


function FoodCard({food,foods,index}) {

    let navigate = useNavigate();
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{foods.title}</Card.Title>
                <Card.Text>{foods[index].content} </Card.Text>
                <Card.Text>{foods.price} </Card.Text>
                <Button variant="primary" onClick={()=>{
                    navigate('/detail/'+ food.id); // 주소를 형태에 맞게 이동을 시킨것이다. 
                    
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;