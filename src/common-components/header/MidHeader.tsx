import React from 'react'
import logo from "../../assets/turners-logo.png"
import styles from "./MidHeader.module.scss"
import LoginReg from './midHeader/LoginReg'
import Phone from './midHeader/Phone'
import FindUs from './midHeader/FindUs'

function MidHeader() {
  return (
    <div className={styles.MidHeader}>
      <div className={styles.leftSide}>
        <a href='./'><img src={logo} alt="turner logo"/></a>
      </div>
      <div className={styles.rightSide}>
        <LoginReg/>
        <Phone/>
        <FindUs/>
      </div>
    </div>
  )
}

export default MidHeader