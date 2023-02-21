import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../App.css";
function Home() {
  const [travels, setTravels] = useState([]);
  console.log(travels);

  useEffect(() => {
    async function fetchTravels() {
      try {
        const response = await api.get("/travels");
        setTravels(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTravels();
  }, []);
  return (
    <>
      <h1 className="style-h1"> Qual o segredo da felicidade?</h1>
      <h2 className="style-h2">
        Descubra viajando para os países com maior índice de felicidade do
        mundo!
      </h2>

      <Container>
        <Row xs={1} md={2} className="g-4">
          {travels.map((currentCountry) => {
            return (
              <Col key={currentCountry.id}>
                <Card className="style-cd">
                  <Card.Img
                    className="syle-img"
                    src={currentCountry.attributes.image}
                    alt="foto da cidade"
                    variant="top"
                  />
                  <Card.Body>
                    <Card.Title className="style-country">
                      {currentCountry.attributes.country}
                    </Card.Title>
                    <Card.Text className="style-card">
                      {" "}
                      <hr></hr>
                      <p>
                        <strong>Idioma:</strong>{" "}
                        {currentCountry.attributes.language}
                      </p>
                      <p>
                        <strong>Moeda:</strong>{" "}
                        {currentCountry.attributes.currency}
                      </p>
                      <p>
                        <strong>População:</strong>{" "}
                        {currentCountry.attributes.population}
                      </p>
                      <p>
                        <strong>Fronteiras:</strong>{" "}
                        {currentCountry.attributes.borders}
                      </p>
                      <p>
                        <strong>Principais Pontos Turísticos: </strong>
                        {currentCountry.attributes.sightseeing}
                      </p>
                      <p>
                        <strong>Descrição:</strong>
                        {currentCountry.attributes.description}
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ alignself: "center" }}>
                    <Link to="/form">
                      <button
                        style={{
                          fontFamily: '"Quicksand", sans-serif',
                          border: "none",
                          background: "transparent",
                          color: "#0d6efd",
                          marginLeft: "180px",
                          fontSize: "15px",
                          fontWeight: "600",
                          height: "50px",
                        }}
                      >
                        Quero fazer essa viagem!
                      </button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
