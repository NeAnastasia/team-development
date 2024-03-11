import {    Form } from "react-bootstrap";
import { instance } from "../Api/api";

function Checked({ checked, label, id, apiAdd, apiDelete, Email }) {
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(apiAdd, JSON.stringify({email:Email}));
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.delete(apiDelete, JSON.stringify({data:{Email}}));
    } catch (err) {
      alert(err);
    }
  };

  if (checked) {
    return <Form.Check label={label} id={id} checked onClick={handleDelete} />;
  } else {
    return <Form.Check label={label} id={id} onClick={handlePost} />;
  }
}

export default Checked;
