import ACTIONS from './index'
import axios from 'axios'
import { API_URL } from '../../global_constant'

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${API_URL}/user/all_infor`, {
        headers: { Authorization: token }
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}