import React from 'react'

import ButtonLogic from 'components/ButtonLogic/ButtonLogic'
import styles from './OperatorsBtns.module.scss'

const OperatorsBtns = ({ operatorsValues, handleSetAllValues }) => (
  <div className={styles.operatorsWrapp}>
    <ButtonLogic arrayValues={operatorsValues} styles={styles} handleSetAllValues={handleSetAllValues} />
  </div>
)

export default OperatorsBtns
