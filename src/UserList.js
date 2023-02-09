import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const UserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserList(res.data);
    });
  }, []);
  return (
    <div className="users">
      {userList.map((user) => (
        <div key={user.id} className="block">
          <Card border="secondary" style={{ width: "18rem" }} className="Card">
            <Card.Header className="header">{user.name}</Card.Header>
            <Card.Body>
              <Card.Title className="title">{user.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.email}
              </Card.Subtitle>
              <hr />
              <Card.Text>
                <span>Adresse : </span>
                {user.address.street}
                {user.address.suite}
                {user.address.zipcode}
                {user.address.city}
                {user.address.geo.lat}
                {user.address.geo.lag}
                <br />
                <span>Phone : </span>
                {user.phone}
                <br />
                <span>WebSite : </span>
                {user.website}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                {user.company.name}
                <br />
                {user.company.catchPhrase}
                <br />
                {user.company.bs}
                <br />
              </small>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserList;
