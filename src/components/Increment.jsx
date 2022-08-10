import { Button } from 'react-bootstrap';
import { useCounter } from './CountContext';

const Increment = () => {

    const { inc } = useCounter();

    return(
        <Button
            size="lg"
            className="m-4"
            onClick={inc}
        >Inc
        </Button>
    );
}

export default Increment;