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
        <Button className="btn-success">
          <span className="ps-2" onClick={handleApprove}>Одобрить</span>
        </Button>
      </Row>
      <Row className="me-1 mt-2">
        <Button className="btn-danger">
          <span className="ps-2" onClick={handleReject}>Отклонить</span>
        </Button>
      </Row>
    </Col>
  );
}

export default AprRejBtn;
