import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './NumbersBtns.module.scss'

const NumbersBtns = ({ numberValues }) => {
  return (
    <div className={styles.numbersWrapp}>
      <ButtonLogic
        arrayValues={numberValues}
        styles={styles} />
    </div>
  )
}

export default NumbersBtns
