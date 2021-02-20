import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './OperatorsBtns.module.scss'

const OperatorsBtns = ({operatorsValues, handleSetOperandValue}) => {
  return (
    <div className={styles.operatorsWrapp}>
      <ButtonLogic
        arrayValues={operatorsValues}
        styles={styles}
        handleSetOperandValue={handleSetOperandValue}
      />
    </div>
  )
}

export default OperatorsBtns

