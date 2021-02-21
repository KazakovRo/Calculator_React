import React, { useState } from 'react'

import styles from './App.module.scss'

import { ADDITIONAL_VALUES, NUMBER_VALUES, OPERATORS_VALUES } from 'static/data'
import { isClearBtn, isEqualBtn, isOperator } from 'utils/checker'
import ResultArea from 'components/ResultArea/ResultArea'
import CalculatorButtons from 'components/CalculatorButtons/CalculatorButtons'

const App = () => {
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(0)

  const handlePlusOperator = (firstOperand, secondOperand) => firstOperand + secondOperand
  const handleMinusOperator = (firstOperand, secondOperand) => firstOperand - secondOperand
  const handleMultiplyOperator = (firstOperand, secondOperand) => firstOperand * secondOperand
  const handleDivideOperator = (firstOperand, secondOperand) => firstOperand / secondOperand

  const handleSetAllValues = btnValue => {
    typeof btnValue === 'number' && handleOperandValue(btnValue)
    isClearBtn(btnValue) && handleClearAll()
    isOperator(btnValue) && setOperator(btnValue)
    isEqualBtn(btnValue) && handleEqualTo(firstOperand, secondOperand, operator)
  }

  const handleOperandValue = btnValue => {
    if (isOperator(operator)) {
      setFirstOperand(btnValue)
      setResult(btnValue)
    } else {
      setSecondOperand(btnValue)
      setResult(btnValue)
    }
  }

  const handleEqualTo = (firstOperand, secondOperand, operator) => {
    let result

    switch (operator) {
      case '+':
        result = handlePlusOperator(firstOperand, secondOperand)
        break

      case '-':
        result = handleMinusOperator(firstOperand, secondOperand)
        break

      case '/':
        result = handleDivideOperator(firstOperand, secondOperand)
        break

      case 'x':
        result = handleMultiplyOperator(firstOperand, secondOperand)
        break

      default:
        result = 0
        break
    }

    setResult(result)
    setFirstOperand(result)
  }

  const handleClearAll = () => {
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setResult(0)
  }

  return (
    <div className={styles.calculatorWrapp}>
      <ResultArea result={result} />

      <CalculatorButtons
        numberValues={NUMBER_VALUES}
        operatorsValues={OPERATORS_VALUES}
        additionalValues={ADDITIONAL_VALUES}
        handleSetAllValues={handleSetAllValues}
      />
    </div>
  )
}

export default App
