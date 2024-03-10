import { Button, Row, Col } from "react-bootstrap";
import { instance } from "../Api/api";
import KeyStatusOnHands from "./key-status-onhand";
import BtnDelete from "./btn-trashcan";

function KeyStatus({number, state, userId}) {

  const handleReturn = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.put("api/key/" + number + "/transfer", JSON.stringify({ number, state: 0, userId}));
    } catch (err) {
      alert(err);
    }
  };

  if (state !== 0) {
    return (
      <Row className="align-self-center">
        <Col xs={10}>
            <Row>
        <KeyStatusOnHands userId={userId}/>
        </Row>
        <Row>
          <Button className="btn-success mt-0" onClick={handleReturn}>
            Вернули
          </Button>
          </Row>
        </Col>
        <Col xs={2}>
          <BtnDelete number={number}/>
        </Col>
      </Row>
    );
  } 
 else {
    return (
      <Row className="align-self-center">
        <Col xs={10}>
          <div className="alert alert-info">В деканате</div>
        </Col>
        <Col xs={2}>
        <BtnDelete number={number}/>
        </Col>
      </Row>
    );
  }
}

export default KeyStatus;
