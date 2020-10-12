const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Router } = require("express");
const Films = require("../models").film;
const Reviews = require("../models").review;

const router = new Router();

router.get("/films/price/:ean", async (req, res, next) => {
  async function getHtml() {
    try {
      const ean = parseInt(req.params.ean);
      console.log("ean", ean);
      const result = await axios.get(
        `https://www.amazon.nl/s?k=${ean}&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss`
      );
      const response = await axios.get(
        `https://www.bol.com/nl/s/?searchtext=${ean}&searchContext=media_all&appliedSearchContextId=&suggestFragment=&adjustedSection=&originalSection=&originalSearchContext=&section=main&N=0&defaultSearchContext=media_all`
      );
      // console.log("result", result)
      if (!result && !response) {
        res.status(404).send("item not found");
      } else {
        const dom = new JSDOM(result.data);
        const dom1 = new JSDOM(response.data);
        const isInAmazon =
          dom.window.document.getElementsByClassName("a-price-whole").length !==
          0;

        console.log(
          "Amz check",
          dom.window.document.getElementsByClassName("a-price-whole").length
        );
        // if(!isInAmazon){
        // return res.send("Item not in Amazon")
        // }
        const AmzPrice =
          isInAmazon&&
          dom.window.document.getElementsByClassName("a-price-whole")[0]
            .textContent;

        const AmzPic =
          isInAmazon &&
          dom.window.document
            .getElementsByClassName("s-image")[0]
            .getAttribute("src");
        const AmzTitle =
          isInAmazon &&
          dom.window.document
            .getElementsByClassName("s-image")[0]
            .getAttribute("alt");

        // const isInAmazon = {(AmzPrice?AmzPrice: null || AmzTitle? AmzTitle: null || AmzPic? AmzPic:null)}
        // console.log('Amazon', isInAmazon)
        const isInBol =
          dom1.window.document.getElementsByClassName("promo-price").length !==
          0;

        const eurosBol =
          isInBol &&
          dom1.window.document.getElementsByClassName("promo-price")[0]
            .textContent;
        const BolPrice = eurosBol.replace(/\s.{2}/g, ",");
        // const bol = BolPrice.replace(/(.{2})/g,",")
        const BolPic =
          isInBol &&
          dom1.window.document
            .getElementsByClassName("h-o-hidden")[0]
            .getElementsByTagName("img")[0]
            .getAttribute("src");
        const BolTitle =
          isInBol &&
          dom1.window.document
            .getElementsByClassName("h-o-hidden")[0]
            .getElementsByTagName("img")[0]
            .getAttribute("alt");
        console.log(
          "check bol",
          dom1.window.document.getElementsByClassName("promo-price")[0]
            .textContent
        );
        // console.log('what is here', AmzPic, AmzPrice, AmzTitle, BolPrice, BolPic, BolTitle)
        console.log("what is here", AmzPrice);
        return res.status(200).send({
          AmzPic,
          AmzPrice,
          AmzTitle,
          BolPrice,
          BolPic,
          BolTitle,
        });
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
