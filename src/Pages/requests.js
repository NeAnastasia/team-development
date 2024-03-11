import { Card, Container, Row, Col } from "react-bootstrap";
import RequestCard from "../Components/request-card";
import RequestModal from "../Components/request-modal";
import { useState, useEffect } from "react";
import { instance } from "../Api/api";

function Requests() {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      const response = await instance.get("api/applications");
      setData(response.data);
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
        <div className="alert alert-primary mt-3 text-center" role="alert">
          Нет заявок
        </div>
      </Container>
    );
  } else {
    const all = data.applications.map(function (item) {
      return (
        <RequestModal
          key={item.id}
          name={item.name}
          keyId={item.keyId}
          description={item.description}
          date={item.date}
          periodId={item.periodId}
          owner={item.owner}
          isRepeated={item.isRepeated}
          state={item.state}
        />
      );
    });
    return (
      <Container>
        <Row>
          {all}
        </Row>
      </Container>
    );
  }
}

export default Requests;
