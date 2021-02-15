import React from "react"

import NumbersBtns from '../NumbersBtns/NumbersBtns'
import OperatorsBtns from '../OperatorsBtns/OperatorsBtns'
import AdditionalBtns from '../AdditionalBtns/AdditionalBtns'

import styles from './CalculatorButtons.module.scss'

const CalculatorButtons = ({numberValues, operatorsValues, additionalValues}) => {
  return (
    <div className={styles.calculatorBtns}>
      <NumbersBtns numberValues={numberValues} />
      <OperatorsBtns operatorsValues={operatorsValues} />

      <AdditionalBtns additionalValues={additionalValues} />
    </div>
  )
}

export default CalculatorButtons