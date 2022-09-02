import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

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
        <ItemCount stock={5} initial={1}/>
      </Card.Body>
    </Card>
  );
}

export default Item;