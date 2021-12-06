const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');
const checkObjectId = require('../../middleware/checkObjectId');


const Faq = require('../../models/Faq');

// @route    POST api/faq
// @desc     Create or update faq
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
        const newFaq = new Faq({
          question: req.body.question,
          answer: req.body.answer
        });
  
        const faq = await newFaq.save();
  
        res.json(faq);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );



// @route    GET api/faqs
// @desc     Get all faqs
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ date: -1 });
    res.json(faqs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    DELETE api/faq/:id
// @desc     Delete a faq
// @access   Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);

    if (!faq) {
      return res.status(404).json({ msg: 'Faq not found' });
    }

    await faq.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



module.exports = router;
