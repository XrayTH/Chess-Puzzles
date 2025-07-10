import axios from 'axios'
const baseUrl = process.env.REACT_APP_API+'noticias'

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(() => null)
}

const create = newObject => {
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
export default { getAll, create, update }