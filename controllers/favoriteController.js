const db = require("../models");

// Defining methods for the FavoritesController
module.exports = {
  findAll: function (req, res) {
    console.log("trying to find all Favorites");
    // console.log(req);
    console.log(req.query);
    db.Favorite
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Favorite
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Favorite
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateLike: function (req, res) {
    db.Favorite.find({ userID: req.params.userID, candidateID: req.params.candidateID })
      .then((favorites) => {
        if (favorites && favorites.length > 0) {
          db.Favorite
            .findOneAndRemove({ userID: req.params.userID, candidateID: req.params.candidateID }
            )
            .then(dbModel => res.json(dbModel))
        }
        else {
          db.Favorite
            .create({userID: req.params.userID, candidateID: req.params.candidateID, count: 0})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
              console.log(err);
              res.status(422).json(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
  },
  remove: function (req, res) {
    db.Favorite
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
