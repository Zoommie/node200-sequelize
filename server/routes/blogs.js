const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Blog = require('../db/models');


router.get('/', (req, res) => {
    models.Blog
        .findAll()
        .then(blog => {
            res.status(200).json(blog);
        });
});

router.get('/featured', (req, res) => {
    models.Blog
      .findAll({ where: { featured: true } })
      .then(blog => {res.status(200).json(blog)})
  });

router.get('/:id', (req, res) => {
    models.Blog
       .findById(req.params.id)
       .then(blog => { 
         if (blog) {res.status(200).json(blog)}
         else {res.status(404).json(blog)}
       })
   });

router.post('/', (req, res) => {
    req.body.authorId = req.query.authorId;
    models.Blog
        .create(req.body)
        .then(blog => {
            res.status(201).json(blog);
        });
});

router.put('/:id', (req, res) => {
    models.Blog
      .update(req.body,{where: {id: req.params.id}})
      .then(blog => {res.status(204).json(blog)})
  });

  router.delete('/:id', (req, res) => {
    if (req.params.id) {
     models.Blog
     .destroy({where: {id: req.params.id}})
     .then(res.status(200).send('Blog is deleted'))}
  });







module.exports = router;