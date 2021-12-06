import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNewss } from '../../actions/news';

import NewsList from '../Home/NewsList';

const News = ({
  news,
  getNewss
}) => {
  useEffect(() => {
    getNewss();
  }, [getNewss]);

  return (
    <section className="container">
      <h1 className="large text-primary">News</h1>
      <Link to='/add-news' className='naji-type1-btn'>
        <i className='fas fa-newspaper' />  Add News
      </Link>
      <NewsList news={news.newss} />
    </section>
  );
};

News.propTypes = {
  getNewss: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  news: state.news
});

export default connect(mapStateToProps, { getNewss })(
  News
);


