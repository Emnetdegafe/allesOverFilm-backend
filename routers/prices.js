const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Router } = require("express");
const Films = require("../models").film;
const Reviews = require("../models").review;

const router = new Router();

router.get("/films/price/:eau", async (req, res) => {
  async function getHtml() {
    try {
      const eau = parseInt(req.params.eau);
      console.log("eau", eau);
      const result = await axios.get(
        `https://www.amazon.nl/s?k=${eau}&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss`
      );
      const response = await axios.get(
        `https://www.bol.com/nl/s/?searchtext=${eau}&searchContext=media_all&appliedSearchContextId=&suggestFragment=&adjustedSection=&originalSection=&originalSearchContext=&section=main&N=0&defaultSearchContext=media_all`
      );
      if (!result && !response) {
        res.status(404).send("item not found");
      } else {
        const dom = new JSDOM(result.data);
        const dom1 = new JSDOM(response.data);
        const AmzPrice = dom.window.document.getElementsByClassName(
          "a-price-whole"
        )[0].textContent;
        const AmzPic = dom.window.document
          .getElementsByClassName("s-image")[0]
          .getAttribute("src");
        const AmzTitle = dom.window.document
          .getElementsByClassName("s-image")[0]
          .getAttribute("alt");
        const eurosBol = dom1.window.document.getElementsByClassName(
          "promo-price"
        )[0].textContent;
        const BolPic = dom1.window.document
          .getElementsByClassName("h-o-hidden")[0]
          .getElementsByTagName("img")[0]
          .getAttribute("src");
        const BolTitle = dom1.window.document
          .getElementsByClassName("h-o-hidden")[0]
          .getElementsByTagName("img")[0]
          .getAttribute("alt");
        console.log("pic", AmzPic);
        const BolPrice = eurosBol.replace(/\s/g, "");
        console.log(AmzPrice, BolPrice);
        // console.log(`${euros}, ${cents}`)
        res.status(200).send({ AmzPrice, AmzPic, AmzTitle, BolPrice, BolPic, BolTitle });
      }
    } catch (e) {
      console.log("err", e);
    }
  }
  getHtml();
});
router.get("/films", async (req, res) => {
  try {
    const films = await Films.findAll({
      include: [Reviews],
    });
    res.status(200).send({ message: "ok", films });
  } catch (e) {
    console.log(e);
  }
}),
  router.get("/films/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const film = await Films.findByPk(id, {
        include: [Reviews],
      });
      if (film) res.status(200).send({ message: "ok", film });
    } catch (e) {
      console.log(e);
    }
  });
module.exports = router;
