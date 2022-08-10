import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CountContext } from './CountContext';

const Increment = () => {

    const { inc } = useContext(CountContext);

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