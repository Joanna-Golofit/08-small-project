import React from 'react'
import Card from '../UI/Card';
import styles from './UsersList.module.css'


const UsersList = (props) => {
  return (
    // {
    //   props.users.length > 0 && (
        <Card className={styles.users}>
          <ul>
            {
              props.users.map(user => <li key={user.name}>{user.name} ({user.age} years old)</li>)
            }
          </ul>
        </Card >
    //   )
    // }
  )
}

export default UsersList