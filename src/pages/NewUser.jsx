import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../index.css";
import { connect } from "react-redux";
import { createUser } from "../redux/createUserReducers";

const NewUser = ({ createUser }) => {
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    desc: "",
    validated: false,
  });
  const resetFields = () => setFields({ name: "", surname: "", desc: "" });

  const handleOnChange = (e) => {
    if (e.target.id === "formGroupName") {
      setFields({ ...fields, name: e.target.value });
    } else if (e.target.id === "formGroupSurname") {
      setFields({ ...fields, surname: e.target.value });
    } else {
      setFields({ ...fields, desc: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.name.length && fields.surname.length && fields.desc.length) {
      createUser(fields);
      resetFields();
    } else {
      setFields({ ...fields, validated: true });
    }
  };

  return (
    <Form
      className="new-user__wrapper"
      noValidate
      validated={fields.validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={fields.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formGroupSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          value={fields.surname}
          onChange={handleOnChange}
          placeholder="Enter your name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          value={fields.desc}
          onChange={handleOnChange}
          style={{ height: "100px" }}
          placeholder="Enter description"
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Create
      </Button>
    </Form>
  );
};

const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(NewUser);
