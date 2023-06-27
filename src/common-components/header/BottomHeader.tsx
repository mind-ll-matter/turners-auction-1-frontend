import React from 'react'
import styles from "./BottomHeader.module.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function BottomHeader() {
  return (
    <div className={styles.BottomHeader}>
      <div className={styles.leftSide}>
        <button>Search <ExpandMoreIcon/></button>
        <button>How to Buy <ExpandMoreIcon/></button>
        <button>Sell your Car <ExpandMoreIcon/></button>
        <button>Find a Car <ExpandMoreIcon/></button>
      </div>
      <button className={styles.rightSide}>Services & Information <ExpandMoreIcon/></button>
    </div>
  )
}

export default BottomHeader