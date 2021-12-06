import {
  GET_NEWSS,
  NEWS_ERROR,
  ADD_NEWS,
  DELETE_NEWS
} from '../actions/types';

const initialState = {
  newss: [],
  news: null,
  loading: true,
  error: {}
};

function newsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWSS:
      return {
        ...state,
        newss: payload,
        loading: false
      };
    case ADD_NEWS:
      return {
        ...state,
        newss: [payload, ...state.newss],
        loading: false
      };
    case DELETE_NEWS:
      return {
        ...state,
        newss: state.newss.filter((news) => news._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}

export default newsReducer;
