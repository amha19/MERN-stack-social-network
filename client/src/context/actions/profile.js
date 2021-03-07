import axios from 'axios';
import * as actions from './types';

export const getCurrentProfile = () => async (profileDispatch) => {
    try {
        const res = await axios.get('/api/profile/me');

        profileDispatch({
            type: actions.GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        profileDispatch({
            type: actions.PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
