import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { instance } from "../Api/api";

function KeyModal() {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const [number, setNumber] = useState("");
  const handleCloseApi = async (e) => {
    setShow(false);
    e.preventDefault();
    try {
        const response = await instance.post(
          "api/key/create",
          JSON.stringify({ number })
        );
      } catch (err) {
        alert(err);
      }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setClose(true);

  return (
    <>
      <Link onClick={handleShow}>Cоздать ключ</Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Row>
            <Col xs={1} className="ms-auto me-3">
              <Button size="sm" variant="secondary" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </Button>
            </Col>
          </Row>
          <Row>
            <h5> Создать ключ </h5>
          </Row>
          <Row>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Аудитория</Form.Label>
                <Form.Control
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseApi}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KeyModal;
