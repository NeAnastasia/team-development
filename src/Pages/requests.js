import { Card, Container, Row, Col } from "react-bootstrap";
import RequestCard from "../Components/request-card";
import RequestModal from "../Components/request-modal";
import { useState, useEffect } from "react";
import { instance } from "../Api/api";

function Requests() {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      //const response = await instance.get("/requests");
      //setData(response.data);
      setData({
        id: 1,
        name: "Название",
        description: "Lalala",
        date: "24.05.2024",
        periodId: "2",
        keyId: "254",
        owner: "1ca-f15863",
        isRepeated: true,
        weekday: "",
      },
      {
        id: 1,
        name: "Название",
        description: "Lalala",
        date: "24.05.2024",
        periodId: "2",
        keyId: "254",
        owner: "1ca-f15863",
        isRepeated: true,
        weekday: "",
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  if (data.length == 0) {
    return (
      <Container>
        <div class="alert alert-primary mt-3 text-center" role="alert">
          Нет заявок
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col xs={6}>
            <RequestCard name={data.name} keyId={data.keyId}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Requests;
