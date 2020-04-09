import React, { useState, useEffect } from "react";
import { Link,Route } from "react-router-dom";
import User from './User';
import { API_REST_META } from "../Config/Constant";

const UserList = ({ match }) => {
  const initialState = [];
  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(API_REST_META.USER_ENDPOINT);
      const json = await res.json();
      setUsers(json);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.length > 0 &&
          users.map((u) => {
            return (
              <li key={u.id}>
                {u.id} - {u.name} - {u.username} -{" "}
                <Link to={`${API_REST_META.USER_ENDPOINT}/1`}>{u.name}</Link> - {u.phone} -{" "}
                {u.website}
              </li>
            );
          })}
      </ul>
        <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
    </div>
  );
};

export default UserList;
