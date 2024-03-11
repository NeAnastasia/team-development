import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TimeAndDate from "./time-and-date";
import RequestCard from "./request-card";
import { instance } from "../Api/api";
import StatesModal from "./states-modal";

function RequestModal({
  id,
  name,
  keyId,
  description,
  date,
  periodId,
  owner,
  isRepeated,
  state,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      const response = await instance.get("user/" + owner);
      setData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <Col xs={6}>
        <div onClick={handleShow}>
          <RequestCard
            name={name}
            keyId={keyId}
            date={date}
            periodId={periodId}
            id={id}
            state={state}
          />
        </div>
      </Col>
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
            <Row className="ms-2">{data.userName}</Row>
            <Row>
                <div className="alert alert-primary mt-3 ms-2 text-center">
                  {data.roles}
                </div>
            </Row>
            <Row className="ms-2">Аудитория</Row>
            <Row>
              <Col xs={6}>
                <div className="alert alert-primary mt-3 ms-2 text-center">
                  {keyId}
                </div>
              </Col>
              <Col className="align-self-center">
                <TimeAndDate periodId={periodId} date={date} />
              </Col>
            </Row>
            <Row className="ms-2">Название</Row>
            <Row>
              <div className="ms-3 alert alert-primary mt-3 text-center">
                {name}
              </div>
            </Row>
            <Row className="ms-2">Описание</Row>
            <Row>
              <div className="ms-3 alert alert-primary mt-3 text-center">
                {description}
              </div>
            </Row>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <StatesModal requestId={id} state={state} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestModal;
