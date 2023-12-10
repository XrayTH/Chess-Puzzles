import axios from 'axios'
const baseUrl = '/api/usuarios'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getByID = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const getByUser = (user) => {
  const request = axios.get(`${baseUrl}/por-usuario/${user}`)
  return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data).catch(error => { throw error; });
}


const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getByID, getByUser, create, update }