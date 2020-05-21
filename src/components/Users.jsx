import React from "react";
import { Card } from "react-bootstrap";
import removeIcon from "../assets/clear-black-18dp.svg";
import editIcon from "../assets/create-black-18dp.svg";
import { connect } from "react-redux";
import { getAllUsers } from "../redux/getUsersReducer";
import { Spinner } from "react-bootstrap";
import { removeUser } from "../redux/removeUserReducer";

const Users = ({ users, getAllUsers, removeUser, loading }) => {
  const handleRemoveUser = (e) => {
    const cardId = e.target.closest("[data-type]").dataset.type;
    removeUser(cardId);
    getAllUsers();
  };

  const handleEditUser = () => {};

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
            <img onClick={handleEditUser} src={editIcon} alt="edit" />
            <img onClick={handleRemoveUser} src={removeIcon} alt="remove" />
          </span>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.appReducers.loading,
});

const mapDispatchToProps = {
  getAllUsers,
  removeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
