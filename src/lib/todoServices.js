export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
  .then((res) => res.json())
}

export const createTodo = (name) => {
  return fetch('http://localhost:8080/todos', {
    method: 'POST',
    'headers': {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
  .then((res) => res.json())
}