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
    isBackBtn(btnValue) && handleBackBtn(firstOperand, secondOperand)
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
  }

  // 1. Если у тебя есть result то ты удаляешь последний символ result. После удаления последнего символа result - ты делаешь handleClearAll().
  // 2. Если у тебя есть в secondOperand что то то ты убираешь последний симмвол.
  // 3. Если в secondOperand ничего нету то ты проверяешь operator и если он есть - удаляешь его.
  // 4. Дальше если вдруг у тебя и operator нету тогда ты проверяешь firstOperand и уже удаляешь последний символ с firstOperand.
  // Если в этих 3 стейтах нихуя нету тогде нихуя не делаешь.
  // Hint: Для удаления последнего значения в строке используй #.slice(0, -1).
  const handleBackBtn = (firstOperand, secondOperand) => {
    console.log('back btn')
    let changeValue = null

    secondOperand === null ? (changeValue = firstOperand) : (changeValue = secondOperand && isChangeFirst === false)

    const convertToArray = String(changeValue).split('')
    convertToArray.pop()
    const convertToString = convertToArray.join('')
    const newOperandValue = Number(convertToString)

    isChangeFirst ? setFirstOperand(newOperandValue) : setSecondOperand(newOperandValue)

    // let firstOperand = firstNumber

    // handleEqualTo()
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
