import Form from "react-bootstrap/Form";
import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";

function Forms() {
  const [form, setForm] = useState({
    nome: "",
    idade: 0,
    destino: "",
    quando: "",
    expectativas: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const infosForAPI = { data: { ...form } };
      console.log(infosForAPI);

      await api.post("/forms", infosForAPI);
      navigate("/viewForm");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <h2 className="style-h1">Programe sua Viagem</h2>
        <div class="container">
          <div class="row">
            <Card
              class="col-md-6"
              style={{
                margin: "0 30%",
                width: "500px",
                backgroundColor: "#f0f8ff",
              }}
              className="teste"
            >
              <Form style={{ fontFamily: '"Quicksand", sans-serif;' }}>
                <Form.Group controlId="form-name">
                  <Form.Label className="mb-3">
                    <b>Nome:</b>
                  </Form.Label>
                  <Form.Control
                    id="input-form-nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="form-age">
                  <Form.Label className="input-form-idade">
                    <b>Idade:</b>
                  </Form.Label>
                  <Form.Control
                    id="input-form-idade"
                    type="number"
                    name="idade"
                    value={form.idade}
                    onChange={handleChange}
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="form-destiny">
                  <Form.Label className="input-form-destino">
                    <b>Destino:</b>
                  </Form.Label>
                  <Form.Control
                    id="input-form-destino"
                    name="destino"
                    value={form.destino}
                    onChange={handleChange}
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="from-when">
                  <Form.Label className="input-form-quando">
                    <b>Data:</b>
                  </Form.Label>
                  <Form.Control
                    id="input-form-quando"
                    type="date"
                    name="quando"
                    value={form.quando}
                    onChange={handleChange}
                  />
                  <br></br>
                </Form.Group>
                <Form.Group controlId="form-expec">
                  <Form.Label className="input-form-expectativas">
                    <b>Expectativas:</b>
                  </Form.Label>
                  <Form.Control
                    id="input-form-expectativas"
                    name="expectativas"
                    value={form.expectativas}
                    onChange={handleChange}
                  />
                </Form.Group>

                <br></br>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    height: "50px",
                    width: "100px",
                    border: "none",
                    background: "transparent",
                    color: "#0d6efd",
                    marginLeft: "150px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Salvar
                </button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
