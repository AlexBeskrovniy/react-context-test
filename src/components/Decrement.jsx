import { Button } from 'react-bootstrap';
import { useCounter } from './CountContext';

const Decrement = () => {

    const { dec } = useCounter();

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