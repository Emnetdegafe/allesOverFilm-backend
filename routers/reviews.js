const { JSDOM } = require("jsdom");
const { Router } = require("express");
const Reviews = require("../models").review;
const Films = require("../models").film;

const router = new Router();
router.get("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  console.log("eau", id);
  try {
    const review = await Reviews.findByPk(id, {
        include: {models: Films}
    });
    if (!review) {
      return res.status(404).send({ message: "Review not found" });
    } else {
      res.status(200).json({ message: "ok", review });
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/reviews", async (req, res) => {
  //   const eau = parseInt(req.params.eau);
  try {
    const reviews = await Reviews.findAll();
    if (reviews === null) {
      return res.status(404).send({ message: "Review was not found" });
    } else {
      res.status(200).send({ message: "ok", reviews });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
