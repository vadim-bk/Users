import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { removeUser } from "../redux/usersReducer";
import removeIcon from "../assets/clear-black-18dp.svg";

const AlertRemove = ({ removeUser }) => {
  const [state, setState] = useState({
    show: false,
    id: null,
  });

  const handleClose = () => setState({ ...state, show: false });

  const handleShow = (e) => {
    const userId = e.target.closest("[data-type]").dataset.type;
    setState({ ...state, id: userId, show: true });
  };

  const handleRemoveUser = () => {
    removeUser(state.id);
  };

  return (
    <>
      <img onClick={handleShow} src={removeIcon} alt="remove" />

      <Modal show={state.show} onHide={handleClose}>
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="sm" variant="danger" onClick={handleRemoveUser}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(null, mapDispatchToProps)(AlertRemove);
