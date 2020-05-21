import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../redux/usersReducer";
import { Form, Button, Alert } from "react-bootstrap";

import "../index.css";

const NewUser = ({ createUser }) => {
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    desc: "",
    validated: false,
    created: false,
  });

  const handleOnChange = ({ target }) => {
    const id = target.id;

    if (id === "formGroupName") {
      setFields({ ...fields, name: target.value });
    } else if (id === "formGroupSurname") {
      setFields({ ...fields, surname: target.value });
    } else {
      setFields({ ...fields, desc: target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.name.length && fields.surname.length && fields.desc.length) {
      createUser(fields);
      setFields({ ...fields, created: true });
    } else {
      setFields({ ...fields, validated: true });
    }
  };

  if (fields.created) {
    return (
      <Alert variant="success">
        Success, created new user! Go to <Link to="/">Home</Link>
      </Alert>
    );
  }

  return (
    <Form
      className="form"
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
          className="form-textarea"
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
