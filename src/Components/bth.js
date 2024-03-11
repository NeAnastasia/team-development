import { Row, Col, Button } from "react-bootstrap";
import { instance } from "../Api/api";

function AprRejBtn({ requestId }) {
  const handleApprove = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "api/application/" + requestId + "/approve"
      );
    } catch (err) {
      alert(err);
    }
  };

  const handleReject = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "api/application/" + requestId + "/reject"
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Col>
      <Row className="me-1">
        <Button className="btn-success" onClick={handleApprove}>
          Одобрить
        </Button>
      </Row>
      <Row className="me-1 mt-2">
        <Button className="btn-danger" onClick={handleReject}>
          Отклонить
        </Button>
      </Row>
    </Col>
  );
}

export default AprRejBtn;
