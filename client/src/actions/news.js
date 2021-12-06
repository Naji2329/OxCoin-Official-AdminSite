import api from '../utils/api';
import { setAlert } from './alert';

import {
    ADD_NEWS,
    NEWS_ERROR,
    GET_NEWSS,
    DELETE_NEWS
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/



// Add News
export const addNews = (formData, navigate) => async (dispatch) => {
    
  try {
    // console.log("sadf"+formData);
    const res = await api.post('/news', formData);
    dispatch({
      type: ADD_NEWS,
      payload: res.data
    });

    dispatch(setAlert('News Added Success!', 'success'));
    navigate('/news');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: NEWS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get Newss
export const getNewss = () => async (dispatch) => {
  try {
    const res = await api.get('/news');
    dispatch({
      type: GET_NEWSS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete news
export const deleteNews = (id) => async (dispatch) => {
  try {
    await api.delete(`/news/${id}`);

    dispatch({
      type: DELETE_NEWS,
      payload: id
    });

    dispatch(setAlert('NEWS Removed', 'success'));
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
