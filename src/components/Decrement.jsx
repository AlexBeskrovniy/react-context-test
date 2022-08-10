import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CountContext } from './CountContext';

const Decrement = () => {

    const { dec } = useContext(CountContext);

    return(
        <Button
            size="lg"
            className="m-4"
            onClick={dec}
        >Dec
        </Button>
    );
}

export default Decrement;