import React from 'react'

import ButtonLogic from 'components/ButtonLogic/ButtonLogic'
import styles from './NumbersBtns.module.scss'

const NumbersBtns = ({ numberValues, handleSetAllValues }) => (
  <div className={styles.numbersWrapp}>
    <ButtonLogic arrayValues={numberValues} styles={styles} handleSetAllValues={handleSetAllValues} />
  </div>
)

export default NumbersBtns
