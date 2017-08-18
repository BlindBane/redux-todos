import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getFilteredTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-todo'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type='checkbox' onChange={() => toggleTodo(id)} checked={isComplete} />
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    return (
      <div className='Todo-list'>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} />
              )
            )}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({todos: getFilteredTodos(state.todo.todos, ownProps.filter)}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)
