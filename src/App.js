import React, { useState } from "react"

import styles from './App.module.scss';

import ResultArea from './components/ResultArea/ResultArea'
import CalculatorButtons from './components/CalculatorButtons/CalculatorButtons'

const App = () => {
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(0)
  const [isFirstValue, setIsFirstValue] = useState(true)

  const numberValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const operatorsValues = ['+', '-', '/', 'x']
  const additionalValues = ['.', 'A/C', '=']

  const handlePlusOperator = (firstOperand, secondOperand) => firstOperand + secondOperand
  const handleMinusOperator = (firstOperand, secondOperand) => firstOperand - secondOperand
  const handleMultiplyOperator = (firstOperand, secondOperand) => firstOperand * secondOperand
  const handleDivideOperator = (firstOperand, secondOperand) => firstOperand / secondOperand

  const handleEqualTo = (firstOperand, secondOperand, operator) => {
    let result 

    const isPlusOperator = operator === "+"
    const isMinusOperator = operator === "-"
    const isMultiplyOperator = operator === "x"

    if (isPlusOperator) {
      result = handlePlusOperator(firstOperand, secondOperand)
    } else if (isMinusOperator) {
      result = handleMinusOperator(firstOperand, secondOperand)
    } else if (isMultiplyOperator) {
      result = handleMultiplyOperator(firstOperand, secondOperand)
    } else {
      result = handleDivideOperator(firstOperand, secondOperand)
    }
    
    return setResult(result)
  }

  const handleClearAll = () => {
    setIsFirstValue(true)
    setResult(0)
  }

  const handleOperandValue = (btnValue) => {
    const isFirstOperand = typeof btnValue == 'number' && isFirstValue === true

    if (isFirstOperand) {
      setFirstOperand(btnValue)
      setResult(btnValue)
    } else {
      setSecondOperand(btnValue)
      setResult(btnValue)
    }
  }

  const handleSetOperandValue = (btnValue) => { 
    const isOperand = typeof btnValue == 'number'
    const isOperator = typeof btnValue == 'string' && btnValue !== '=' && btnValue !== 'A/C'
    const isEqualBtn = typeof btnValue == 'string' && btnValue === '='
    const isClearBtn = typeof btnValue == 'string' && btnValue === 'A/C'

    if (isOperand) {
      handleOperandValue(btnValue)
    } else if (isOperator) {
      setOperator(btnValue)
      setIsFirstValue(false)    
    } else if (isEqualBtn) {
      handleEqualTo(firstOperand, secondOperand, operator)
    } else if (isClearBtn) {
      handleClearAll()
    }
  }

  return (
    <div className={styles.calculatorWrapp}>
      <ResultArea result={result} />
      
      <CalculatorButtons
        numberValues={numberValues}
        operatorsValues={operatorsValues}
        additionalValues={additionalValues}
        handleSetOperandValue={handleSetOperandValue}
      />
    </div>
  )
}

export default App
