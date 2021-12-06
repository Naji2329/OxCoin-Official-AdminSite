import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import news from './news';
import faq from './faq';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  news,
  faq
});
