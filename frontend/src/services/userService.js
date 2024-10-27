import axios from 'axios'

const baseurl = 'http://localhost:3000/api/users'

const getUsername = async () => {
    const response = await axios.get(baseurl)
    return response.data
}

export default {getUsername}