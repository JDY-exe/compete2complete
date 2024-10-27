import axios from 'axios'

const baseurl = 'http://localhost:3000/api/users'

const signup = async (username, password) => {
    const response = await axios.post(baseurl, {username, password})
    return response.data
}

const getUserById = async (id) => {
    const response = await axios.get(`${baseurl}/${id}`)
    return response.data
}

export default {signup, getUserById}