const modelJoke = require('../models/joke');

const randomJoke = async (_req, res) => {
  const joke = await modelJoke.getRandomJoke();
  res.render('jokes/index', { joke });
};

const jokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await modelJoke.getJokeByCategory(category);
  res.render('jokes/index', { joke });
};

module.exports = { randomJoke, jokeByCategory };