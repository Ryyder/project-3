const db = require("../models");

// Defining methods for the FavoritesController
module.exports = {
  findAll: function (req, res) {
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
  //update like
  updateLike: function (req, res) {
    //query by userid and candidateid
    db.Favorite.find({ userID: req.params.userID, candidateID: req.params.candidateID })
      .then((favorites) => {
        //if the users id and candidateid exists,
        //we remove them from the Favorite db
        if (favorites && favorites.length > 0) {
          db.Favorite
            .findOneAndRemove({ userID: req.params.userID, candidateID: req.params.candidateID }
            )
            .then(dbModel => res.json(dbModel))
        }
        else {
          //if the users id and candidate do not exist we add them to the db
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
