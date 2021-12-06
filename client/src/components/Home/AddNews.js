import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNews } from '../../actions/news';

const AddNews = ({ addNews }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    name: '',
    date: new Date()
  });

  const { title, comment, name, date } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Add News</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add News
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addNews(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="comment"
            cols="30"
            rows="5"
            placeholder="* Comment"
            value={comment}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/news">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddNews.propTypes = {
  addNews: PropTypes.func.isRequired
};

export default connect(null, { addNews })(AddNews);
