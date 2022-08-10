import { Container } from 'react-bootstrap';
import Counter from './Counter';
import Decrement from './Decrement';
import Increment from './Increment';

const Main = () => {
    return (
        <Container>
            <h1>Main Page</h1>
            <div className="d-flex justify-content-center mb-4">
                <Counter />
            </div>
                <div className="d-flex justify-content-center">
                    <Decrement />
                    <Increment />
                </div>
        </Container>
    );
}

export default Main;