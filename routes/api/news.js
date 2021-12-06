const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');
const checkObjectId = require('../../middleware/checkObjectId');


const News = require('../../models/News');

// @route    POST api/news
// @desc     Create or update user news
// @access   Private
router.post(
    '/',
    auth,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {  
        const newNews = new News({
          title: req.body.title,
          comment: req.body.comment,
          name: req.body.name,
          date: req.body.date,
        });
  
        const post = await newNews.save();
  
        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );



// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const newss = await News.find().sort({ date: -1 });
    res.json(newss);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    DELETE api/newss/:id
// @desc     Delete a news
// @access   Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }

    await news.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



module.exports = router;
