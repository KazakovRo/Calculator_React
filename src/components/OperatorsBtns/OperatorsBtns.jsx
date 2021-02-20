import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './OperatorsBtns.module.scss'

const OperatorsBtns = ({operatorsValues, handleSetAllValues}) => {
  return (
    <div className={styles.operatorsWrapp}>
      <ButtonLogic
        arrayValues={operatorsValues}
        styles={styles}
        handleSetAllValues={handleSetAllValues}
      />
    </div>
  )
}

export default OperatorsBtns

