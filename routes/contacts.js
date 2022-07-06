const express = require("express");
const router = express.Router();
const path = require("path");
const Contacts = require("../models/Contact");

/**
 *
 *     ****************** GET METHODS ******************
 *
 */

router.get("/", (err, res) => {
  res.sendFile(path.join(__dirname, "../views/contacts.html"));
});
// GET all contacts
router.get("/getAll", (req, res) => {
  Contacts.find({}, (err, contact) => {
    if (err) {
      res.json(err);
    } else {
      res.json(contact);
    }
  });
});

// GET by ObjectID
router.get("/getById", (req, res) => {
  const { _id } = req.query;

  Contacts.findById({ _id }, (err, contact) => {
    if (err) {
      throw new err();
    } else if (!contact) {
      res.send("there is no contact with this id");
    } else {
      res.json(contact);
    }
  });
});

/**
 *
 *      ****************** POST METHODS ******************
 *
 */

// POST new contact
router.post("/new", (req, res) => {
  const { name, surname, email, phoneNum } = req.body;

  const contact = new Contacts({
    name,
    surname,
    email,
    phoneNum,
  });
  const promise = contact.save();

  promise
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.json(err);
    });
});
/**
 *
 *      ****************** DELETE METHODS ******************
 *
 */

router.delete("/deleteById", (req, res) => {
  const { _id } = req.body;

  Contacts.findByIdAndDelete(_id, (err, contact) => {
    if (err) {
      res.json(err);
    } else if (!contact) {
      res.send("there is no contact with this id");
    } else {
      res.json({ msg: "success", action: "deleted." });
    }
  });
});

/**
 *
 *      ****************** PUT METHODS ******************
 *
 */

router.put("/updateById", (req, res) => {
  const { _id, name, surname, email, phoneNum } = req.body;

  Contacts.findByIdAndUpdate(
    _id,
    {
      name,
      surname,
      email,
      phoneNum,
    },
    (err, contact) => {
      if (err) {
        throw new err();
      } else if (!contact) {
        res.send("there is no contact with this id");
      } else {
        res.json(contact);
      }
    }
  );
});

module.exports = router;
