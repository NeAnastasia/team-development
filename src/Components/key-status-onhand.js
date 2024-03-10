import { Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { instance } from "../Api/api";

function KeyStatusOnHands({userId}) {
  const [data, setData] = useState([]);
  const handleGet = async () => {
    try {
      const response = await instance.get("user/" + userId);
      setData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
    return (
          <div className="alert alert-warning mb-0 p-1">На руках у {data.userName}</div>
    );
}

export default KeyStatusOnHands;
