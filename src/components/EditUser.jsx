import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { editUser } from "../redux/usersReducer";
import { getAllUsers } from "../redux/usersReducer";
import { getSelectedUser } from "../redux/usersReducer";
import "../index.css";

const EditUser = ({
  match,
  getSelectedUser,
  editUser,
  getAllUsers,
  user,
  loading,
}) => {
  const [fields, setFields] = useState({
    id: "",
    name: "",
    surname: "",
    desc: "",
    validated: false,
  });

  const history = useHistory();

  useEffect(() => {
    getSelectedUser(match.params.userId);
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

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
      editUser(user.id, fields);
      getAllUsers();

      history.push("/");
    } else {
      setFields({ ...fields, validated: true });
    }
  };

  if (user.id !== fields.id) {
    setFields({
      id: user.id,
      name: user.name,
      surname: user.surname,
      desc: user.desc,
    });
  }

  return (
    <Form
      noValidate
      className="form"
      validated={fields.validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={fields.name}
          onChange={handleOnChange}
          type="text"
          required
        />
      </Form.Group>

      <Form.Group controlId="formGroupSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          value={fields.surname}
          onChange={handleOnChange}
          type="text"
          required
        />
      </Form.Group>

      <Form.Group controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={fields.desc}
          onChange={handleOnChange}
          className="form-textarea"
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Edit
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  user: state.usersReducer.user,
  loading: state.appReducer.loading,
});

const mapDispatchToProps = {
  getSelectedUser,
  editUser,
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
