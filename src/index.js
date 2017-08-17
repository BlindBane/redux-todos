import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

const actions = bindActionCreators({ updateCurrent }, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
document.getElementById('root')
)

registerServiceWorker()
