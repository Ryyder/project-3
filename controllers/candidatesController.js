const db = require("../models");

// Defining methods for the CandidatesController
module.exports = {
  findAll: function (req, res) {
    console.log("trying to find all candidates");
    // console.log(req);
    console.log(req.query);
    db.Candidate
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Candidate
      .findById(req.params.id)
      .then(dbModel => {
        db.Favorite.find({candidateID: req.params.id})
        .then(favorites => {
          res.json({...dbModel, favorites: favorites})
        })
        .catch((err, results) => {
          if(!results || !results.length) {
            res.json({...dbModel, favorites: []})
          }
        })
        
      })
      .catch(err => res.status(422).json(err));
  },
  findByCandidateName: function (req, res) {
    let result = {};
    //console.log(req);
    db.Candidate
      .findOne(req.query)
      .then(dbModel => {
        result = {model: dbModel, favorites: []};
        console.log("console log start");
        console.log("..." + dbModel._id.toString());
        console.log(dbModel);
        db.Favorite.find({candidateID: dbModel._id.toString()})
        .then(favorites => {
          console.log("favorites");
          console.log(favorites);
          res.json({model: dbModel, favorites: favorites})
        })
        .catch((err) => {
            console.log(err);
            res.json({model: dbModel, favorites: []})
          
        })
        
      })
      .catch(err => {
        if(result) {
          res.json(result);
        }
        else {
          console.log(err);
        res.status(500).json(err);
        }
        
      });
  },
  create: function (req, res) {
    db.Candidate
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    const { id } = req.params
    db.Candidate
      .findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Candidate
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
