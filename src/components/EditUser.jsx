import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { editUser } from "../redux/usersReducer";
import { getAllUsers } from "../redux/usersReducer";
import { getSelectedUser } from "../redux/usersReducer";

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

  const handleOnChange = (e) => {
    const id = e.target.id;

    if (id === "formGroupName") {
      setFields({ ...fields, name: e.target.value });
    } else if (id === "formGroupSurname") {
      setFields({ ...fields, surname: e.target.value });
    } else {
      setFields({ ...fields, desc: e.target.value });
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

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (user.id !== fields.id) {
    setFields({
      id: user.id,
      name: user.name,
      surname: user.surname,
      desc: user.desc,
    });
  }

  return (
    <Form noValidate className="selected-user__form" onSubmit={handleSubmit}>
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
          style={{ height: "100px" }}
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
