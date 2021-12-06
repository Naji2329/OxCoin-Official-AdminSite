import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFaq } from '../../actions/faq';

const AddFaq = ({ addFaq }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });

  const { question, answer } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Add FAQ</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add FAQ
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addFaq(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Question"
            name="question"
            value={question}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group"> 
          <div className="form-group">
            <textarea
              name="answer"
              cols="30"
              rows="5"
              placeholder="* Answer"
              value={answer}
              onChange={onChange}
            />
          </div>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/news">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddFaq.propTypes = {
  addFaq: PropTypes.func.isRequired
};

export default connect(null, { addFaq })(AddFaq);
