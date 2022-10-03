import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import UsersList from './UsersList';

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([{name: "Asia", age: 37}]);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      console.log("Empty input(s) not allowed!");
      return;
    }
    if (Number(age) < 1) {
      console.log("Age has to be greater than 0!");
      return;
    }
    console.log(username, age);
    addToUsersHandler();
    clearInputs();
  };

  const enteredUsernameHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      return;
    }
    setUsername(e.target.value);
  }

  const enteredAgeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      return;
    }
    setAge(e.target.value);
  }

  const clearInputs = () => {
    setUsername("");
    setAge("");
  };

  const addToUsersHandler = () => {
    setUsers([{ name: username, age }, ...users])
  }


  return (
    <>
      <Card className={styles.input}>
        <form
          onSubmit={addUserHandler}
        >
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" value={username} onChange={enteredUsernameHandler} ></input>
          <label htmlFor='age'>Age (years)</label>
          <input id="age" type="number" value={age} onChange={enteredAgeHandler} ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      <Card className={styles.input}>
        <UsersList users={users} />
      </Card>
    </>

  )
}

export default AddUser