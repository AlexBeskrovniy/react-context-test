import { useState, useContext } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { DataContext } from './DataContext';

const RecordCard = () => {

  const data = useContext(DataContext);
  const [records, setRecords] = useState(data);
  //console.log(data);

    return (
        <>

        {records.length !== 0 ? records.map((record) => (
          <Card className='mt-2 text-dark' key={record.id}>
            <Card.Header>Record №<span>{record.id}</span></Card.Header>
            <Card.Body>
              <Card.Title>{record.name}</Card.Title>
              <Card.Text>
                {record.location.name}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )) : <Spinner animation="border" variant="warning" className="position-absolute top-50 left-50" /> }
          
        </>
    );
}

export default RecordCard;