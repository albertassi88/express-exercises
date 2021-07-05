const modelCategorie = require('../models/categorie');

const getCategories = async (_req, res) => {
  const categories = await modelCategorie.getCategories();
  res.render('categories/index', { categories });
};

const redirectToCategories = (_req, res) => {  //redireciona para a página /categories
  res.redirect('/categories');
};

module.exports = { getCategories, redirectToCategories };