import { Container, Row, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { instance } from "../Api/api";
import UserCard from "../Components/user-card";

function Users() {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    try {
      const response = await instance.get("users");
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
      <Container>
        <Alert className="alert-primary mt-3">Нет пользователей</Alert>
      </Container>
    );
  } else {
    const all = data.users.map(function (item) {
      return (
        <UserCard
          key={item.userId}
          userName={item.userName}
          userEmail={item.userEmail}
          roles={item.roles} 
        />
      );
    });
    return (
      <Container>
        <Row>{all}</Row>
      </Container>
    );
  }
}

export default Users;
