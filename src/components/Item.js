import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ image, title, description, price, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Button variant="primary"><Link to={`/detail/${id}`} style={{color: 'white'}}>Ver más</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Item;