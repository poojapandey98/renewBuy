import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardView=(task)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{task.task}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardView;