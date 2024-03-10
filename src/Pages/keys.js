import { Container, Alert, Row } from "react-bootstrap";
import KeyCard from "../Components/key-card";
import { Link } from "react-router-dom";
import KeyModal from "../Components/key-modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../Api/api";

function Keys() {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      const response = await instance.get("api/keys");
      setData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  if (data.length === 0) {
    return (
      <>
        <Alert className="alert-primary mt-3">Нет ключей</Alert>
        <KeyModal />
      </>
    );
  } else {
    const all = data.allKeys.map(function (key) {
      return (
        <KeyCard
          key={key.number}
          number={key.number}
          state={key.state}
          userId={key.userId}
        />
      );
    });
    return (
      <Container>
        <Row className="align-items-center">{all}</Row>
        <KeyModal />
      </Container>
    );
  }
}

export default Keys;
