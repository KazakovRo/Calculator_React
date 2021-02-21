import React from 'react'

import styles from './ResultArea.module.scss'

const ResultArea = ({ result }) => (
  <div className={styles.resultWrapp}>
    <input className={styles.result} type='text' value={result} placeholder='0' readOnly onChange={result.value} />
    <p className={styles.caption}></p>
  </div>
)

export default ResultArea
