import {getTodos, createTodo, updateTodo, destroyTodo} from '../lib/todoServices'
import {showMessage} from './messages'

const initialState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
export const TODO_REMOVE = 'TODO_REMOVE'

export const updateCurrent = (val) => ({type: 'CURRENT_UPDATE', payload: val})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo})
export const removeTodo = (id) => ({type: TODO_REMOVE, payload: id})

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos Now!'))
    getTodos().then(todos => dispatch(loadTodos(todos)))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo!'))
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
  }
}

export const toggleTodo = (id, getState) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Todo updated!'))
    const {todos} = getState().todo
    const todo = todos.find(todo => todo.id === id)
    const toggled = {...todo, isComplete: !todo.isComplete}
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)))
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Todo Deleted!'))
    destroyTodo(id).then(res => dispatch(removeTodo(id)))
  }
}

export const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.isComplete)
    case 'complete':
      return todos.filter(todo => todo.isComplete)
    default:
      return todos
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    case TODOS_LOAD:
      return {...state, todos: action.payload}
    case TODO_REPLACE:
      return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)}
    case TODO_REMOVE:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state
  }
}
