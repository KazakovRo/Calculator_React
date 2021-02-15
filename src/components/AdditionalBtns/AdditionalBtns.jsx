import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './AdditionalBtns.module.scss'

const AdditionalBtns = ({additionalValues}) => {
  return (
    <div className={styles.additionalWrapp}>
      <ButtonLogic
        arrayValues={additionalValues}
        styles={styles} />
    </div>
  )
}

export default AdditionalBtns

