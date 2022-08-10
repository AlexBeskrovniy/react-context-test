import { useContext } from 'react';
import { CountContext } from './CountContext';

const Counter = () => {

    const { count } = useContext(CountContext);

    return(
        <span className="fs-1">
            {count}
        </span>
    );
}

export default Counter;