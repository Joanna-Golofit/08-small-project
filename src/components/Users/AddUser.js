import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const modalMessages = [
    { title: "Invalid input", message: "Empty input(s) not allowed!" },
    { title: "Invalid age", message: "Age has to be greater than 0!" },
  ];
  const [modalMessage, setModalMessage] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("nameInputRef", nameInputRef.current.value);
    const enteredName =  nameInputRef.current.value;
    const enteredUserAge =  ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      console.log("Empty input(s) not allowed!");
      setModalMessage(modalMessages[0])
      return;
    }
    if (Number(enteredUserAge) < 1) {
      console.log("Age has to be greater than 0!");
      setModalMessage(modalMessages[1]);
      return;
    }
    console.log(enteredName, enteredUserAge);
    props.addToUsersListHandler(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // clearInputs();
  };

  // const enteredUsernameHandler = (e) => {
  //   setUsername(e.target.value);
  // }

  // const enteredAgeHandler = (e) => {
  //   setAge(e.target.value);
  // }

  // const clearInputs = () => {
  //   setUsername("");
  //   setAge("");
  // };

  const clearModalMessage = (e) => {
    setModalMessage();
  }

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            ref={nameInputRef}
            id="username" type="text"
            // value={username}
            // onChange={enteredUsernameHandler}
          />
          <label htmlFor='age'>Age (years)</label>
          <input
            ref={ageInputRef}
            id="age"
            type="number"
            // value={age}
            // onChange={enteredAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {modalMessage && <ErrorModal clearModalMessage={clearModalMessage} modalMessage={modalMessage} />}
    </>

  )
}

export default AddUser