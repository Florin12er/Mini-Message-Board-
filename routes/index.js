var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Company new employs:", messages: messages });
});

router.post("/new", function(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  const messageDate = req.body.messageDate ? new Date(req.body.messageDate) : new Date();

  if (!messageText || !messageUser) {
    return res.status(400).send(`<h1>Both message text and user are required. <a href="/">Press here to go back</a></h1>`);
  }

  messages.push({ text: messageText, user: messageUser, added: messageDate });
  res.redirect("/");
});

module.exports = router;
