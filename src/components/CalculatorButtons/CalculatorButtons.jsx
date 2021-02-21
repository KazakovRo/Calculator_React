import React from 'react'

import NumbersBtns from 'components/NumbersBtns/NumbersBtns'
import OperatorsBtns from 'components/OperatorsBtns/OperatorsBtns'
import AdditionalBtns from 'components/AdditionalBtns/AdditionalBtns'

import styles from './CalculatorButtons.module.scss'

const CalculatorButtons = ({ numberValues, operatorsValues, additionalValues, handleSetAllValues }) => {
  return (
    <div className={styles.calculatorBtns}>
      <NumbersBtns numberValues={numberValues} handleSetAllValues={handleSetAllValues} />
      <OperatorsBtns operatorsValues={operatorsValues} handleSetAllValues={handleSetAllValues} />

      <AdditionalBtns additionalValues={additionalValues} handleSetAllValues={handleSetAllValues} />
    </div>
  )
}

export default CalculatorButtons
