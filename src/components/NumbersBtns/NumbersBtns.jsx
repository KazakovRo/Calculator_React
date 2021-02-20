import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './NumbersBtns.module.scss'

const NumbersBtns = ({ numberValues, handleSetOperandValue }) => {
  return (
    <div className={styles.numbersWrapp}>
      <ButtonLogic
        arrayValues={numberValues}
        styles={styles}
        handleSetOperandValue={handleSetOperandValue}
      />
    </div>
  )
}

export default NumbersBtns
