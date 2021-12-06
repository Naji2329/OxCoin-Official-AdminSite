import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteNews } from '../../actions/news';
import formatDate from '../../utils/formatDate';

const NewsList = ({ news, deleteNews }) => {
  const newss = news.map((row) => (
    <div className="newsRow" key={row._id}>
      <p className="news-title">{row.title}</p>
      <p className="news-comment">{row.comment}</p>
      <div className="news-row-footer">
        <p className="news-name-date">{row.name} | {formatDate(row.date)}</p>
        <p className="news-delete-btn" onClick={() => deleteNews(row._id)}>Delete</p>
      </div>
    </div>
  ));

  return (
    <Fragment>
      {newss}
          
    </Fragment>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  deleteNews: PropTypes.func.isRequired
};

export default connect(null, { deleteNews })(NewsList);
