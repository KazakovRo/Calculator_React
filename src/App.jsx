import React, { useEffect, useState } from 'react'

import styles from './App.module.scss'

import { ADDITIONAL_VALUES, NUMBER_VALUES, OPERATORS_VALUES } from 'static/data'
import { isClearBtn, isEqualBtn, isOperator } from 'utils/checker'
import ResultArea from 'components/ResultArea/ResultArea'
import CalculatorButtons from 'components/CalculatorButtons/CalculatorButtons'

const App = () => {
  const [firstOperand, setFirstOperand] = useState(null)
  const [secondOperand, setSecondOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(null)

  const [screenData, setScreenData] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (typeof result === 'number') {
      setScreenData(result)
    } else {
      const firstNumber = firstOperand ? firstOperand : ''
      const operatorSymbol = operator ? ` ${operator}` : ''
      const secondNumber = operator && secondOperand ? ` ${secondOperand}` : ''

      setScreenData(`${firstNumber}${operatorSymbol}${secondNumber}`)
    }
  }, [firstOperand, operator, secondOperand, result])

  const handlePlusOperator = (firstOperand, secondOperand) => firstOperand + secondOperand
  const handleMinusOperator = (firstOperand, secondOperand) => firstOperand - secondOperand
  const handleMultiplyOperator = (firstOperand, secondOperand) => firstOperand * secondOperand
  const handleDivideOperator = (firstOperand, secondOperand) => firstOperand / secondOperand

  const handleSetAllValues = btnValue => {
    // Set 0-9
    typeof btnValue === 'number' && handleSetValue(btnValue)
    // Set + - / *
    isOperator(btnValue) && handleSetOperator(btnValue)
    // Set =
    isEqualBtn(btnValue) && handleEqualTo(firstOperand, secondOperand, operator)
    // Call clear action
    isClearBtn(btnValue) && handleClearAll()
  }

  const handleSetValue = operand => {
    if (typeof result === 'number') {
      handleClearAll()
      setFirstOperand(operand)
    } else {
      isOperator(operator)
        ? setSecondOperand(+`${secondOperand ? secondOperand : ''}${operand}`)
        : setFirstOperand(+`${firstOperand ? firstOperand : ''}${operand}`)
    }
  }

  const handleSetOperator = operator => {
    setOperator(operator)

    if (typeof result === 'number') {
      setFirstOperand(result)
      setSecondOperand(null)
      setResult(null)
    }
  }

  const handleEqualTo = (firstOperand, secondOperand, operator) => {
    let firstNumber = firstOperand
    let currentResult = null

    if (typeof result === 'number') firstNumber = result

    switch (operator) {
      case '+':
        currentResult = handlePlusOperator(firstNumber, secondOperand)
        break

      case '-':
        currentResult = handleMinusOperator(firstNumber, secondOperand)
        break

      case '/':
        currentResult = handleDivideOperator(firstNumber, secondOperand)
        break

      case 'x':
        currentResult = handleMultiplyOperator(firstNumber, secondOperand)
        break

      default:
        currentResult = null
        break
    }

    setHistory([...history, [`${firstNumber} ${operator} ${secondOperand} = ${currentResult}`]])
    setResult(currentResult)
  }

  const handleClearAll = () => {
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setResult('')
  }

  console.log(history)

  return (
    <div className={styles.calculatorWrapp}>
      <ResultArea result={screenData} />

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
