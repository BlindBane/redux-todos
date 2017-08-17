import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

const actions = bindActionCreators({ updateCurrent }, store.dispatch)

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos} changeCurrent={actions.updateCurrent} currentTodo={state.currentTodo} />, document.getElementById('root'))
}
render()

store.subscribe(render)

registerServiceWorker()
