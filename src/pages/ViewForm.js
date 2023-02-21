import api from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "antd/es/card/Card";

function ViewForm() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await api.get("/forms");
        setForms(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchForms();
  }, []);

  return (
    <>
      <h1 className="style-h1"> Viagens Programadas</h1>

      {forms.map((currentElement) => {
        console.log(currentElement);

        return (
          <Card
            className="style-cd-form"
            style={{ backgroundColor: "#f0f8ff" }}
          >
            <Form
              style={{
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              <Form.Group controlId="form-view-nome">
                <Form.Label className="mb-3">
                  <b>Nome:</b>
                </Form.Label>
                <Form.Control value={currentElement.attributes.nome} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="form-view-idade">
                <Form.Label className="mb-3">
                  <b>Idade:</b>
                </Form.Label>
                <Form.Control value={currentElement.attributes.idade} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="form-view-destino">
                <Form.Label className="mb-3">
                  <b>Destino:</b>
                </Form.Label>
                <Form.Control value={currentElement.attributes.destino} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="form-view-quando">
                <Form.Label className="mb-3">
                  <b>Data:</b>
                </Form.Label>
                <Form.Control value={currentElement.attributes.quando} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="form-view-expectativa">
                <Form.Label className="mb-3">
                  <b>Expectativas:</b>
                </Form.Label>
                <Form.Control value={currentElement.attributes.expectativas} />
              </Form.Group>
              <br></br>

              <Link to={`/detailsForm/${currentElement.id}`}>
                <button
                  style={{
                    border: "none",
                    marginLeft: "170px",
                    width: "100px",
                    height: "50px",
                    fontSize: "15px",
                    fontFamily: "Quicksand, sans-serif",
                    fontWeight: "600",
                    backgroundColor: "transparent",
                    color: "#0d6efd",
                  }}
                >
                  Saiba Mais
                </button>
              </Link>
            </Form>
          </Card>
        );
      })}
    </>
  );
}
export default ViewForm;
