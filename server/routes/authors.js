const express = require('express');
const router = express.Router();
const models = require('../db/models/index');


router.get('/', (req, res) => {
    models.Author
        .findAll()
        .then(author => {
            res.status(200).json(author);
        });
});

router.get('/:id', (req, res) => {
   models.Author
      .findById(req.params.id)
      .then(author => { 
        if (author) {res.status(200).json(author)}
        else {res.status(404).json(author)}
      })
  });


router.get('/:id/blogs', (req, res) => {
    models.Blog
      .findAll({ where: { authorId: req.params.id } })
      .then(blogs => {res.status(200).json(blogs)})
  });

 
router.post('/', (req, res) => {
    models.Author
        .create()
        .then(author => {
            res.status(201).json(author);
        });
});


router.put('/:id', (req, res) => {
    models.Author
      .update(req.body,{where: {id: req.params.id}})
      .then(author => {res.status(204).json(author)})
  });
  
  router.delete('/:id', (req, res) => {
    if (req.params.id) {
     models.Author
     .destroy({where: {id: req.params.id}})
     .then(res.status(200).send('Author is deleted'))}
  });
  


module.exports = router;