import React from 'react'
// import './Button.scss'
import styles from './Button.module.css'

const Button = (props) => {
  // return <button className={`btn ${props.className || ''}`}>{props.children}</button>

  return (
    <button className={`${styles.btn} ${props.isSecondary ? styles.btnSecondary : ''}`}>
      {props.children}
    </button>
  )
}

export default Button
