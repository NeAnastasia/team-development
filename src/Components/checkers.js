import { Card, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { instance } from "../Api/api";

function Checked({ checked, lable, id, apiAdd, apiDelete, Email }) {
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(apiAdd, Email);
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.delete(apiDelete, Email);
    } catch (err) {
      alert(err);
    }
  };

  if (checked) {
    return <Form.Check label={lable} id={id} checked onChange={handleDelete} />;
  } else {
    <Form.Check label={lable} id={id} onChange={handlePost} />;
  }
}

export default Checked;
