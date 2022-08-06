import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
      <Nav activeKey="/">
        <Nav.Item>
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 ms-2 text-white text-decoration-none">
              Main
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/records" className="d-flex align-items-center mb-2 mb-lg-0 ms-2 text-white text-decoration-none">
              Records
          </Link>
        </Nav.Item>
      </Nav>
    );
}

export default Navbar;