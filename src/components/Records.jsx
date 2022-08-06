import { Container } from 'react-bootstrap';
import RecordCards from './RecordCards';

const Records = () => {

    return(
        <Container>
            <h1>Records Page</h1>
            <div>
                <RecordCards />
            </div>
        </Container>
    );
}

export default Records;