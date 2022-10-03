import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([{ name: "Asia", age: 37 }]);

  const addToUsersHandler = (username, age) => {
    setUsers([{ name: username, age }, ...users])
  }
  return (
    <>
      <AddUser addToUsersHandler={addToUsersHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
