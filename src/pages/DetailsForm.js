import Form from "react-bootstrap/Form";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";

function DetailsForm() {
  const params = useParams();
  const [form, setForms] = useState({});
  const [formEdit, setFormEdit] = useState({});
  const [reload, setReload] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchForms() {
      try {
        const response = await api.get(`/forms/${params.formID}`);
        setForms(response.data.data.attributes);
        setFormEdit(response.data.data.attributes);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchForms();
  }, [reload]);

  function handleChange(e) {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  }

  function handleClick() {
    setShowEdit(!showEdit);
  }

  async function handleSubmit(e) {
    console.log(formEdit);

    try {
      e.preventDefault();
      const infosForAPI = { data: { ...formEdit } };
      console.log(infosForAPI);
      await api.put(`/forms/${params.formID}`, infosForAPI);
      setReload(!reload);
      setShowEdit(false);
      navigate("/viewForm");
    } catch (err) {
      console.log(err);
    }
  }
  console.log(formEdit);
  console.log(showEdit);

  async function handleDelete(e) {
    try {
      e.preventDefault();
      await api.delete(`/forms/${params.formID}`);
      navigate("/viewForm");
    } catch (err) {
      console.log(err);
    }
  }
  console.log(form);
  return (
    <div>
      {showEdit === false && (
        <div className="form-final">
          <h1 className="style-h1">Sua Viagem Programada</h1>
          <Card
            className="viagem-programada"
            style={{
              width: "500",
              margin: "0 35%",
              fontFamily: "Quicksand, sans-serif",
              backgroundColor: "#f0f8ff",
            }}
          >
            <Form>
              <Form.Group controlId="formnome">
                <Form.Label className="mb-3">
                  <b>Nome:</b>
                </Form.Label>
                <Form.Control value={form.nome} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formidade">
                <Form.Label className="mb-3">
                  <b>Idade:</b>
                </Form.Label>
                <Form.Control value={form.idade} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formdestino">
                <Form.Label className="mb-3">
                  <b>Destino:</b>
                </Form.Label>
                <Form.Control value={form.destino} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formdata">
                <Form.Label className="mb-3">
                  <b>Data:</b>
                </Form.Label>
                <Form.Control value={form.quando} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="formexpectativas">
                <Form.Label className="mb-3">
                  <b>Expectativas:</b>
                </Form.Label>
                <Form.Control value={form.expectativas} />
              </Form.Group>
            </Form>
            <br></br>
            <button
              onClick={handleClick}
              style={{
                fontFamily: "Quicksand, sans-serif",
                border: "none",
                background: "transparent",
                color: "#0d6efd",
                fontWeight: "600",
                fontSize: "15px",
                marginLeft: "200px",
                width: "100px",
              }}
            >
              Editar
            </button>
          </Card>
        </div>
      )}

      {showEdit === true && (
        <div>
          <h2 className="style-h1">Edite aqui sua viagem</h2>
          <Card
            className="teste"
            style={{
              width: "500",
              margin: "0 35%",
              backgroundColor: "#f0f8ff",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            <Form>
              <Form.Group controlId="form-nome">
                <Form.Label className="input-form-nome">
                  <b>Nome:</b>
                </Form.Label>
                <Form.Control
                  value={formEdit.nome}
                  onChange={handleChange}
                  name="nome"
                />
              </Form.Group>

              <Form.Group controlId="form-idade">
                <Form.Label className="input-form-idade">
                  <b>Idade:</b>
                </Form.Label>
                <Form.Control
                  value={formEdit.idade}
                  onChange={handleChange}
                  name="idade"
                />
              </Form.Group>

              <Form.Group controlId="form-destino">
                <Form.Label className="input-form-destino">
                  <b>Destino:</b>
                </Form.Label>
                <Form.Control
                  value={formEdit.destino}
                  onChange={handleChange}
                  name="destino"
                />
              </Form.Group>

              <Form.Group controlId="form-data">
                <Form.Label className="input-form-quando">
                  <b>Data:</b>
                </Form.Label>
                <Form.Control
                  value={formEdit.quando}
                  onChange={handleChange}
                  name="quando"
                />
              </Form.Group>

              <Form.Group controlId="form-expectativas">
                <Form.Label className="input-form-expectativas">
                  <b>Expectativas:</b>
                </Form.Label>
                <Form.Control
                  value={formEdit.expectativas}
                  onChange={handleChange}
                  name="expectativas"
                />
              </Form.Group>
            </Form>
            <br></br>

            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                marginLeft: "200px",
                marginRight: "10px",
                border: "none",
                background: "transparent",
                color: "#0d6efd",
                fontWeight: "600",
                height: "50px",
                fontSize: "15px",
              }}
            >
              Salvar
            </button>

            <button
              onClick={handleDelete}
              style={{
                marginRight: "10px",
                border: "none",
                background: "transparent",
                color: "#0d6efd",
                fontWeight: "600",
                height: "50px",
                fontSize: "15px",
              }}
            >
              Deletar
            </button>
          </Card>
        </div>
      )}
    </div>
  );
}
export default DetailsForm;
