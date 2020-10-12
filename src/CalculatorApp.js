import React from 'react'

import { DisplayContainer } from './containers/DisplayContainer'
import { KeyPadContainer } from './containers/KeyPadContainer'

import './CalculatorApp.sass'

export const CalculatorApp = () => (
  <div className='calculator'>
    <DisplayContainer />
    <KeyPadContainer />
  </div>
)
