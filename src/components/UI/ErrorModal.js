import React from 'react'
import ReactDOM from 'react-dom'
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
      {/* <ModalOverlay modalMessage={props.modalMessage} clearModalMessage={props.clearModalMessage} />
      <Backdrop clearModalMessage={props.clearModalMessage} /> */}
      {/* instead of above 2 standard component we create 2 portals with 2 components (below)  
       we also need to import ReactDOM from 'react-dom', they work the same way, just render in different place in the dom
      */}

      {ReactDOM.createPortal(
        <ModalOverlay modalMessage={props.modalMessage} clearModalMessage={props.clearModalMessage} />,
        document.querySelector("#overlay-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop clearModalMessage={props.clearModalMessage} />,
        document.querySelector("#backdrop-root")
      )}
    </>
  )
}

export default ErrorModal