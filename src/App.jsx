import React, { Fragment, useEffect, useState } from 'react'

import styles from './App.module.scss'

import { ADDITIONAL_VALUES, NUMBER_VALUES, OPERATORS_VALUES } from 'static/data'
import { isClearBtn, isEqualBtn, isOperator, isBackBtn, isChangeFirst } from 'utils/checker'
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
    // Clear last number
    isBackBtn(btnValue) && handleBackBtn(secondOperand, result)
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
    setFirstOperand(null)
    setSecondOperand(null)
    setOperator(null)
    setResult(null)
    console.log('clear all fin')
  }

// delete values
  const handleBackBtn = (secondOperand, result) => {
    console.log('back btn')

    result != 0 && result != null
      ? handleDeleteResultSymbol(result)
      : changeToDelete(firstOperand, secondOperand, operator)
  }

  const handleDeleteResultSymbol = (value) => {
    console.log('func del')

    if (value != 0 && value != null) {
      handleDeleteFunc(value, handleClearAll, setResult)
    }

    if (value < 0) {
      // console.log('less null')
      console.warn(result)
      console.warn(typeof result)
      handleClearAll()
    }
    // 1 - 2 = -1 .then click backBtn = NaN in Result
    // value < 0 && handleClearAll()

    console.log('func del do nothing')
  }

  const changeToDelete = (firstOperand, secondOperand, operator) => {
    if (secondOperand != 0 && secondOperand != null) {
      handleDeleteFunc(secondOperand, setSecondOperand, setSecondOperand)
    } else if (secondOperand === null && operator != null) {
      setOperator(null)
      console.log('operator del')
    } else if (operator === null) {
      handleDeleteResultSymbol(firstOperand)
    } else {
      console.log('fin point')
    }
  }

  const handleDeleteFunc = (value, fucntionResolve, functionReject) => {
    const newValue = value.toString().slice(0, -1)

    if (fucntionResolve === setSecondOperand) {
      newValue.length === 0 ? fucntionResolve(null) : functionReject(+`${newValue}`)
    } else {
      newValue.length === 0 ? fucntionResolve() : functionReject(+`${newValue}`)
    }

    console.log('new func working !!')
  }

  console.log(history)

  return (
    <Fragment>
      <div className={styles.calculatorWrapp}>
        <ResultArea result={screenData} />

        <CalculatorButtons
          numberValues={NUMBER_VALUES}
          operatorsValues={OPERATORS_VALUES}
          additionalValues={ADDITIONAL_VALUES}
          handleSetAllValues={handleSetAllValues}
        />
      </div>

      <ul className='action-log'>
        {history.map((item, index) => (
          <li key={index}>♦ {item}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default App
