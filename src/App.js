import React from 'react'
import { CalculatorApp } from './CalculatorApp'
import './App.sass'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import calculatorAppReducers from './reducers/'

const store = createStore(calculatorAppReducers)

function App () {
  return (
    <div className='App'>
      <Provider store={store}>
        <CalculatorApp />
      </Provider>
    </div>
  )
}

export default App
