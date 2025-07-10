import axios from 'axios'
const baseUrl = process.env.REACT_APP_API+'usuarios'

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(() => null)
}

const getByID = (id) => {
  return axios.get(`${baseUrl}/${id}`)
    .then(response => response.data)
    .catch(() => null)
}

const getByUser = (user) => {
  return axios.get(`${baseUrl}/por-usuario/${user}`)
    .then(response => response.data)
    .catch(() => null)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
    .then(response => response.data)
    .catch(() => null)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
    .catch(() => null)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getByID, getByUser, create, update }