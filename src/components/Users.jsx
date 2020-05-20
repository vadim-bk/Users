import React from "react";
import { Card } from "react-bootstrap";

export const Users = ({ users }) => {
  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      {users.map((user) => (
        <Card key={user.id} style={{ width: "100%", margin: "10px 0" }}>
          <Card.Body>
            <Card.Title>
              <span style={{ marginRight: "5px" }}>{user.name}</span>
              <span>{user.surname}</span>
            </Card.Title>
            <Card.Text>{user.desc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
