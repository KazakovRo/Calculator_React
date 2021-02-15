import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './OperatorsBtns.module.scss'

const OperatorsBtns = ({operatorsValues}) => {
  return (
    <div className={styles.operatorsWrapp}>
      <ButtonLogic
        arrayValues={operatorsValues}
        styles={styles} />
    </div>
  )
}

export default OperatorsBtns

