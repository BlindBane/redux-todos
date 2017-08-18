const baseUrl = process.env.REACT_APP_BASE_URL

export const getTodos = () => {
  return fetch(baseUrl)
  .then((res) => res.json())
}

export const createTodo = (name) => {
  return fetch(baseUrl, {
    method: 'POST',
    'headers': {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
  .then((res) => res.json())
}

export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    'headers': {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then((res) => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    'headers': {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  })
}
