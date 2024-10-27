import axios from 'axios'

const baseurl = 'http://localhost:3000/api/groups'

const getGroups = async () => {
    const response = await axios.get(baseurl)
    return response.data
}

const addGroup = async (group) => {
    const response = await axios.post(baseurl, {...group})
    return response.data
}

export default {getGroups}