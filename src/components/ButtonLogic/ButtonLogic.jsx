import React from "react"

const ButtonLogic = ({arrayValues, styles, handleSetOperandValue}) => {
  return (
    arrayValues.map(btn => (
      <button
        className={styles.btn}
        key={btn}
        onClick={() => handleSetOperandValue(btn)}
      >{btn}</button>
    ))
  )
}

export default ButtonLogic


