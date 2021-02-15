import React, { useState } from "react"

import styles from './App.module.scss';

import ResultArea from './components/ResultArea/ResultArea'
import CalculatorButtons from './components/CalculatorButtons/CalculatorButtons'

const App = () => {
  const [number, setNumber] = useState(0)

  const numberValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const operatorsValues = ['+', '-', '/', 'x']
  const additionalValues = ['.', 'A/C', '=']

  
  
  return (
    <div className={styles.calculatorWrapp}>
      <ResultArea number={number} />
      
      <CalculatorButtons
        numberValues={numberValues}
        operatorsValues={operatorsValues}
        additionalValues={additionalValues}
      />
    </div>
  )
}

export default App
