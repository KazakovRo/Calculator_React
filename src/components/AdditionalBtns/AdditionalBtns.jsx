import React from "react"

import ButtonLogic from '../ButtonLogic/ButtonLogic'
import styles from './AdditionalBtns.module.scss'

const AdditionalBtns = ({additionalValues, handleSetAllValues}) => {
  return (
    <div className={styles.additionalWrapp}>
      <ButtonLogic
        arrayValues={additionalValues}
        styles={styles}
        handleSetAllValues={handleSetAllValues}
      />
    </div>
  )
}

export default AdditionalBtns

