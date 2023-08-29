import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_USERS,DELETE } from "../redux/Types";
import { useEffect,useState } from "react";


function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ALL_USERS,
    });
  }, [dispatch]);

  const removeUser = (id) =>{
    dispatch({
        type: DELETE,
        payload: id
    });
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td><button onClick={()=>removeUser(user.id)}>Delete</button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;