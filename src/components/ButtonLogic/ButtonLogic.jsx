import React from 'react'

const ButtonLogic = ({ arrayValues, styles, handleSetAllValues }) =>
  arrayValues.map(btn => (
    <button className={styles.btn} key={btn} onClick={() => handleSetAllValues(btn)}>
      {btn}
    </button>
  ))

export default ButtonLogic
