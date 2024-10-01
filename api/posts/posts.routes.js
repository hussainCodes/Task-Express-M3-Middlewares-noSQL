const express = require('express');
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require('./posts.controllers');
const upload = require('../../middleware/multerMiddleware');

router.get('/', postsGet);
router.post('/', upload.single('image'),postsCreate);

router.delete('/:postId', postsDelete);

router.put('/:postId', postsUpdate);

module.exports = router;
