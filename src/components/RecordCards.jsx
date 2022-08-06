import { useContext } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { DataContext } from './App';

const RecordCard = () => {

    return (
        <>
          <Card className='mt-2 text-dark'>
            <Card.Header>Record №{index}</Card.Header>
            <Card.Body>
              <Card.Title>{record.name}</Card.Title>
              <Card.Text>
                {record.location}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </>
    );
}

export default RecordCard;