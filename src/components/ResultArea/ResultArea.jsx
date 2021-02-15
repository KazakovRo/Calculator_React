import React from "react"

import styles from './ResultArea.module.scss'

const ResultArea = ({number}) => {
  return (
    <div className={styles.resultWrapp}>
      <input
        className={styles.result}
        type="text"
        value={number}
        placeholder='0'
        onChange={number}
      />
      <p className={styles.caption}>nuhai bebry</p>
    </div>
  )
}

export default ResultArea