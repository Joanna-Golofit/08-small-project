import React from 'react'
import Button from './Button'
import Card from './Card';
import styles from './ErrorModal.module.css'


const ErrorModal = (props) => {
  console.log(props);
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>ErrorModal {props.modalMessage.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.modalMessage.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.showModalHandler}>OK</Button>
      </footer>
    </Card>
  )
}

export default ErrorModal