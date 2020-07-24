const axios = require("axios")
const { JSDOM } = require('jsdom')

app.get("/", (res, req) => {
  try {

async function getHtml(){
  const result = await axios.get("https://www.amazon.nl/s?k=5051889664123&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss")
 // 5051889664123

  const dom = new JSDOM(result.data)
  const euros = dom.window.document.getElementsByClassName('a-price-whole')[0].textContent

  const cents = dom.window.document.getElementsByClassName('a-price')

  console.log(euros)
  res.send(euros)
  // console.log(`${euros}, ${cents}`)
} 
} catch(e) {
  console.log('err', e)
}
})

getHtml()

