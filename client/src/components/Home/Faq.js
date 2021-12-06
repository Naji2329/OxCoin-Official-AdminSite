import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFaqs } from '../../actions/faq';

import FaqList from '../Home/FaqList';

const Faq = ({
  faq,
  getFaqs
}) => {
  useEffect(() => {
    getFaqs();
  }, [getFaqs]);

  console.log(faq);
  return (
    <section className="container">
      <h1 className="large text-primary">Frequently asked questions</h1>
      <Link to='/add-faq' className='naji-type1-btn'>
        <i className='fas fa-newspaper' />  Add FAQ
      </Link>
      <FaqList faq={faq.faqs} />
    </section>
  );
};

Faq.propTypes = {
  getFaqs: PropTypes.func.isRequired,
  faq: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  faq: state.faq
});

export default connect(mapStateToProps, { getFaqs })(
  Faq
);


