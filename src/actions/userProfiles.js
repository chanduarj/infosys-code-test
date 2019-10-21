import axios from 'axios';
import { USER_LOADED, AUTH_ERROR} from './types';
// Load User 
export const loadUser = () => async dispatch => {
    try {
       const res = await axios.get('https://5dac0cf2f593580014f0290c.mockapi.io/api/employee');  
       dispatch({
           type: USER_LOADED,
           payload: res.data[0]
       })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}