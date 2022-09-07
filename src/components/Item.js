import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Item = ({ image, title, description, price }) => {
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
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;