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
  const [history, setHistory] = useState('')

  useEffect(() => {
    if (typeof result === 'number') {
      setScreenData(result)
    } else {
      const firstNumber = firstOperand ? firstOperand : ''
      const operatorSymbol = operator ? ` ${operator}` : ''
      const secondNumber = secondOperand ? ` ${secondOperand}` : ''

      setScreenData(`${firstNumber}${operatorSymbol}${secondNumber}`)
    }
  }, [firstOperand, operator, secondOperand, result])

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

  const handleOperandValue = btnValue =>
    typeof firstOperand === 'number' ? setSecondOperand(btnValue) : setFirstOperand(btnValue)

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

    setHistory(`${history} ${firstOperand} ${operator} ${secondOperand}`)
    setResult(result)
  }

  const handleClearAll = () => {
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setResult('')
    setHistory('')
  }

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
