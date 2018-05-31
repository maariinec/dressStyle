const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dressingSchema = new Schema({
      categorie: String,
      couleur: String,
      motif: String,
      saisons: String,
      commentaire: String,
      photo: String,
      userName: String,
});


module.exports = mongoose.model('dressing', dressingSchema, 'dressings');
