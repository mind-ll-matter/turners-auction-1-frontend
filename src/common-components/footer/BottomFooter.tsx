import React from 'react'
import styles from "./bottomFooter.module.scss"

function BottomFooter() {
  return (
    <div className={styles.BottomFooter}>
      <div className={styles.copyright}>© 2022 Turners</div>
      <div className={styles.bottomButtons}>
      <button><a href="https://www.turners.co.nz/Company/Branches/"><span className={styles.icon_home}></span>Branch Details</a></button>
      <button><a href="http://www.facebook.com/turnersNZ"><span className={styles.icon_facebook}></span>Facebook</a></button>
      <button><a href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/"><span className={styles.icon_envelope_o}></span>Newsletter</a></button>
      <button><a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/"><span className={styles.icon_envelop_o}></span>Email Alerts</a></button>
      <button className={styles.lastButton}><a href="https://www.instagram.com/turners_cars"><span className={styles.icon_instagram}></span>Instagram</a></button>
      {/* <a className="shielded-site-image"><img src="./Frequently Asked Questions about Cars _ Turners_files/shielded-site-logo.png" alt="Women&#39;s Refuge Shield" id="shieldedSite"/></a> */}
      </div>
    </div>
  )
}

export default BottomFooter