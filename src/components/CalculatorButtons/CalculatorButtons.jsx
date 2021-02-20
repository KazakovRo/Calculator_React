import React from "react"

import NumbersBtns from '../NumbersBtns/NumbersBtns'
import OperatorsBtns from '../OperatorsBtns/OperatorsBtns'
import AdditionalBtns from '../AdditionalBtns/AdditionalBtns'

import styles from './CalculatorButtons.module.scss'

const CalculatorButtons = ({numberValues, operatorsValues, additionalValues, handleSetOperandValue}) => {
  return (
    <div className={styles.calculatorBtns}>
      <NumbersBtns 
        numberValues={numberValues}
        handleSetOperandValue={handleSetOperandValue}
      />
      <OperatorsBtns 
        operatorsValues={operatorsValues} 
        handleSetOperandValue={handleSetOperandValue}
      />

      <AdditionalBtns 
        additionalValues={additionalValues} 
        handleSetOperandValue={handleSetOperandValue}
      />
    </div>
  )
}

export default CalculatorButtons