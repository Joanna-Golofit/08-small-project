import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([{ name: "Asia", age: 37, id: "1xy"}]);
  // const [users, setUsers] = useState([]);

  const addToUsersListHandler = (username, age) => {
    setUsersList(usersList => [{ name: username, age, id: Date.now() }, ...usersList])
  }
  return (
    <>
      <AddUser addToUsersListHandler={addToUsersListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
