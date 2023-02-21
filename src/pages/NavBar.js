import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Nav fill variant="tabs" defaultActiveKey="/home" className="nav-style">
        <Nav.Item>
          <Link
            to="/"
            style={{ color: "black", fontSize: "20px", textDecoration: "none" }}
          >
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/form"
            style={{ color: "black", fontSize: "20px", textDecoration: "none" }}
          >
            Programe sua Viagem
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/viewForm"
            style={{ color: "black", fontSize: "20px", textDecoration: "none" }}
          >
            Viagens Programadas
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
