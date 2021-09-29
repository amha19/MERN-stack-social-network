import axios from 'axios';
import * as actions from './types';
import { setAlert } from './alert';

export const getCurrentProfile = () => async (profileDispatch) => {
    try {
        const res = await axios.get('/api/profile/me');

        profileDispatch({
            type: actions.GET_PROFILE,
            payload: res.data.profile,
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

// Get all profiles
export const getProfiles = () => async (profileDispatch) => {
    profileDispatch({ type: actions.CLEAR_PROFILE });

    try {
        const res = await axios.get('/api/profile/');

        profileDispatch({
            type: actions.GET_PROFILES,
            payload: res.data.profiles,
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

// Get a single user profile
export const getProfileById = (userId) => async (profileDispatch) => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        profileDispatch({
            type: actions.GET_PROFILE,
            payload: res.data.profile,
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

// Get user github repos
export const getUserRepos = (username) => async (profileDispatch) => {
    try {
        const res = await axios.get(`/api/profile/github/${username}`);

        profileDispatch({
            type: actions.GET_REPOS,
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
export const addExperience =
    (formData, history) => async (profileDispatch, alertDispatch) => {
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

            profileDispatch({
                type: actions.UPDATE_PROFILE,
                payload: res.data.profile,
            });

            setAlert('Experience Successfully Added', 'success')(alertDispatch);

            history.push('/dashboard');
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

// Add Education
export const addEducation =
    (formData, history) => async (profileDispatch, alertDispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.put(
                '/api/profile/education',
                formData,
                config
            );

            profileDispatch({
                type: actions.UPDATE_PROFILE,
                payload: res.data.profile,
            });

            setAlert('Education Added Successfully', 'success')(alertDispatch);

            history.push('/dashboard');
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

// Delete Experience
export const deleteExperience =
    (id) => async (profileDispatch, alertDispatch) => {
        try {
            const res = await axios.delete(`/api/profile/experience/${id}`);

            profileDispatch({
                type: actions.UPDATE_PROFILE,
                payload: res.data.profile,
            });

            setAlert(
                'Experience Deleted Successfully',
                'success'
            )(alertDispatch);
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

// Delete Education
export const deleteEducation =
    (id) => async (profileDispatch, alertDispatch) => {
        try {
            const res = await axios.delete(`/api/profile/education/${id}`);

            profileDispatch({
                type: actions.UPDATE_PROFILE,
                payload: res.data.profile,
            });

            setAlert(
                'Education Deleted Successfully',
                'success'
            )(alertDispatch);
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

// Delete Account
export const deleteAccount =
    () => async (profileDispatch, authDispatch, alertDispatch) => {
        if (
            window.confirm(
                'Are you sure you want to delete your account? \n THIS CAN NOT BE UNDONE!'
            )
        ) {
            try {
                await axios.delete('/api/profile/');

                profileDispatch({ type: actions.CLEAR_PROFILE });
                authDispatch({ type: actions.DELETE_ACCOUNT });
                setAlert('Account Deleted', 'success')(alertDispatch);
            } catch (err) {
                console.log(err);
                profileDispatch({
                    type: actions.PROFILE_ERROR,
                    payload: {
                        msg: err.response.statusText,
                        status: err.response.status,
                    },
                });
            }
        }
    };
