import React from 'react'
import styles from "./TopHeader.module.scss"

function TopHeader() {
  return (
    <div className={styles.TopHeader}>
      <ul>
        <li>
          <a href='/#'> Cars</a>
        </li>
        <li className={styles.between}> | </li>
        <li>
          <a href='/#'> Turners Subscription</a>
        </li>
        <li className={styles.between}> | </li>
        <li>
          <a href='/#'> Trucks & Machinery</a>
        </li>
        <li className={styles.between}> | </li>
        <li>
          <a href='/#'> Damaged & End of Life</a>
        </li>
        <li className={styles.between}> | </li>
        {/* <li>
          <a href='/#'> Boats & Marine</a>
        </li>
        <li className={styles.between}> | </li> */}
        <li>
          <a href='/#'> Motorcycles</a>
        </li>
        <li className={styles.between}> | </li>
        <li>
          <a href='/#'> General Goods</a>
        </li>
        <li className={styles.between}> | </li>
        <li>
          <a href='/#'> Buses, Caravans & Motorhomes</a>
        </li>
      </ul>
    </div>
  )
}

export default TopHeader