import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFaq } from '../../actions/faq';

const FaqList = ({ faq, deleteFaq }) => {
  const faqs = faq.map((row) => (
    <div className="newsRow" key={row._id}>
      <p className="news-title">{row.question}</p>
      <p className="news-comment">{row.answer}</p>
      <div className="news-row-footer">
        <p className="news-delete-btn" onClick={() => deleteFaq(row._id)}>Delete</p>
      </div>
    </div>
  ));

  return (
    <Fragment>
      {faqs}
          
    </Fragment>
  );
};

FaqList.propTypes = {
  faq: PropTypes.array.isRequired,
  deleteFaq: PropTypes.func.isRequired
};

export default connect(null, { deleteFaq })(FaqList);
