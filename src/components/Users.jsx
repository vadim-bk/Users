import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Alert from "./Alert";

import editIcon from "../assets/create-black-18dp.svg";

const Users = ({ users, loading }) => {
  const history = useHistory();

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      {users.map((user) => (
        <Card
          key={user.id}
          style={{ width: "100%", margin: "10px 0", position: "relative" }}
          data-type={user.id}
        >
          <Card.Body>
            <Card.Title>
              <span style={{ marginRight: "5px" }}>{user.name}</span>
              <span>{user.surname}</span>
            </Card.Title>
            <Card.Text>{user.desc}</Card.Text>
          </Card.Body>
          <span className="card-icons">
            <img
              onClick={() => history.push(`/user/${user.id}`)}
              src={editIcon}
              alt="edit"
            />
            <Alert />
          </span>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.appReducer.loading,
});

export default connect(mapStateToProps)(Users);
