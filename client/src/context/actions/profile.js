import axios from 'axios';
import * as actions from './types';
import { setAlert } from './alert';

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

export const createProfile =
    (formData, history, edit = false) =>
    async (profileDispatch, alertDispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.post('/api/profile', formData, config);

            profileDispatch({
                type: actions.GET_PROFILE,
                payload: res.data,
            });

            setAlert(
                edit ? 'Profile Updated' : 'Profile Created',
                'success'
            )(alertDispatch);

            if (!edit) history.push('/dashboard');
        } catch (err) {
            console.log(err.response);
            const errors = err.response.data.error;

            if (errors) {
                errors.forEach((error) => {
                    setAlert(error.msg, 'error')(alertDispatch);
                });
            }

            profileDispatch({
                type: actions.PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };

// Add experience
export const updateProfile =
    (formData) => async (profileDispatch, alertDispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.put(
                '/api/profile/experience',
                formData,
                config
            );

            console.log('res from action: ', res.data);

            profileDispatch({
                type: actions.UPDATE_PROFILE,
                payload: res.data,
            });

            setAlert('Experience Successfully Added', 'success')(alertDispatch);
        } catch (err) {
            console.log(err.response);
            const errors = err.response.data.error;

            if (errors) {
                errors.forEach((error) => {
                    setAlert(error.msg, 'error')(alertDispatch);
                });
            }

            profileDispatch({
                type: actions.PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };
