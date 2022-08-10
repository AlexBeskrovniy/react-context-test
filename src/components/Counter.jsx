import { useCounter } from './CountContext';

const Counter = () => {

    const { count } = useCounter();

    return(
        <span className="fs-1">
            {count}
        </span>
    );
}

export default Counter;