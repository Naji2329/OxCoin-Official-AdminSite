import {
  GET_FAQS,
  FAQ_ERROR,
  ADD_FAQ,
  DELETE_FAQ
} from '../actions/types';

const initialState = {
  faqs: [],
  faq: null,
  loading: true,
  error: {}
};

function faqReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FAQS:
      return {
        ...state,
        faqs: payload,
        loading: false
      };
    case ADD_FAQ:
      return {
        ...state,
        faqs: [payload, ...state.faqs],
        loading: false
      };
    case DELETE_FAQ:
      return {
        ...state,
        faqs: state.faqs.filter((faq) => faq._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}

export default faqReducer;
