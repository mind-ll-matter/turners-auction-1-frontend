import React from 'react'
import styles from "../MidHeader.module.scss"

function LoginReg() {
  return (
    <div className={styles.aParent}>
        <a href='https://www.turners.co.nz/Login?ReturnUrl=/FAQs-Cars/'>LOGIN</a>
        <em> OR </em>
        <a href='https://www.turners.co.nz/Login/Registration/'>REGISTER</a>
    </div>
  )
}

export default LoginReg