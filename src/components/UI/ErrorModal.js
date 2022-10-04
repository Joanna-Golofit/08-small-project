import React from 'react'
import Button from './Button'
import Card from './Card';
import styles from './ErrorModal.module.css'


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.clearModalMessage} />
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>ErrorModal {props.modalMessage.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.modalMessage.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.clearModalMessage}>OK</Button>
    </footer>
    </Card>
  )
};

const ErrorModal = (props) => {
  return (
    <>
      <Backdrop clearModalMessage={props.clearModalMessage} />
      <ModalOverlay modalMessage={props.modalMessage} clearModalMessage={props.clearModalMessage} />
    </>
  )
}

export default ErrorModal