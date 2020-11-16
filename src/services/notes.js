import axios from 'axios'
const baseUrl = '/api/notes'



/*we are no longer returning the promise returned by axios directly, but are assigning the promise
to the request variable, and then calling its .then method.
*/
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}


// This module returns an object that has 3 functions as its
// properties that deal with notes. The functions directly return the promises returned
// by the axios methods
export default { getAll, create, update }