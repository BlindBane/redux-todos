import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const todoChangeHandler = (val) => store.dispatch({type: 'CURRENT_UPDATE', payload: val})

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos} changeCurrent={todoChangeHandler} currentTodo={state.currentTodo} />, document.getElementById('root'))
}
render()

store.subscribe(render)

registerServiceWorker()
