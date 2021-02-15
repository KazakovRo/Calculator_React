import React from "react"

const ButtonLogic = ({arrayValues, styles}) => {
  return (
    arrayValues.map(btn => (
      <button
        className={styles.btn}
        key={btn.id}
      >{btn}</button>
    ))
  )
}

export default ButtonLogic


