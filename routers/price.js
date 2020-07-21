const axios = require("axios");
const { JSDOM } = require("jsdom");
const {Router} = require("express")


const router = new Router()

router.get("/film/:price", async (req, res) => {
  async function getHtml() {
    try {
      const result = await axios.get(
        "https://www.amazon.nl/s?k=5051889664123&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss"
      );
      const response = await axios.get(
        "https://www.bol.com/nl/s/?searchtext=5051889664123&searchContext=media_all&appliedSearchContextId=&suggestFragment=&adjustedSection=&originalSection=&originalSearchContext=&section=main&N=0&defaultSearchContext=media_all"
      );

      // 5051889664123

      // console.log("bol", response.data);

      const dom = new JSDOM(result.data);
      const dom1 = new JSDOM(response.data);
      const eurosAmz = dom.window.document.getElementsByClassName(
        "a-price-whole"
      )[0].textContent;
      const eurosBol = dom1.window.document.getElementsByClassName(
        "promo-price"
      )[0].textContent;

      const bolPrice = eurosBol.replace(/\s/g,"");
      console.log(eurosAmz, bolPrice);
      // console.log(`${euros}, ${cents}`)
      res.status(200).send({eurosAmz, bolPrice});
    } catch (e) {
      console.log("err", e);
    }
  }
  getHtml();
});
