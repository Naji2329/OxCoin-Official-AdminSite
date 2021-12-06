import api from '../utils/api';
import { setAlert } from './alert';

import {
    ADD_FAQ,
    FAQ_ERROR,
    GET_FAQS,
    DELETE_FAQ
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/



// Add Faq
export const addFaq = (formData, navigate) => async (dispatch) => {
    
  try {
    const res = await api.post('/faq', formData);
    dispatch({
      type: ADD_FAQ,
      payload: res.data
    });

    dispatch(setAlert('FAQ Added Success!', 'success'));
    navigate('/faq');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FAQ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get Faqs
export const getFaqs = () => async (dispatch) => {
  try {
    const res = await api.get('/faq');
    dispatch({
      type: GET_FAQS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FAQ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete news
export const deleteFaq = (id) => async (dispatch) => {
  console.log('Faq actions :'+ id);
  try {
    await api.delete(`/faq/${id}`);

    dispatch({
      type: DELETE_FAQ,
      payload: id
    });

    dispatch(setAlert('FAQ Removed', 'success'));
  } catch (err) {
    dispatch({
      type: FAQ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
