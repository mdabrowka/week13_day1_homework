const express = require('express');
const filmRouter = new express.Router();

filmRouter.get('/', function (req, res) {
  res.json({ data: 'Hello!' });
});

filmRouter.get('/films', function (req, res) {
  res.json(films);
});

filmRouter.get('/films/:id', function(req, res) {
  const selectedFilm = films[req.params.id];
  res.json({ film: selectedFilm});
});

filmRouter.post('/films', function(req, res) {
  const newFilm = req.body.film;
  films.push(newFilm);
  res.json(films);
});

filmRouter.put('/films/:id', function(req, res) {
  const newFilm = req.body.film;
  films[req.params.id] = newFilm;
  res.json(films);
});

filmRouter.delete('/films/:id', function(req, res) {
   const indexToRemove = req.params.id:
   films.splice(indexToRemove, 1):
   res.json(films);
});
