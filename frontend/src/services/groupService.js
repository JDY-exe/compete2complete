import axios from 'axios'

const baseurl = 'http://localhost:3000/api/groups'

const getGroups = async () => {
    const response = await axios.get(baseurl)
    return response.data
}

export default {getGroups}