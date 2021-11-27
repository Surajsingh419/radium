const axios = require("axios");
const coinModels = require('../models/coinModels')



const getCoin = async function (req, res) {

  try {
    let options = {

      method: "get",



      url: "https://api.coincap.io/v2/assets"



    };

    const coinData = await axios(options);

    let Coin = coinData.data



    console.log(Coin);



    let coins = coinData.data.data.sort(function (a, b) {

      return b.changePercent24Hr - a.changePercent24Hr;

    });



    for (let i = 0; i < coins.length; i++) {

      let data = (({ symbol, name, marketCapUsd, priceUsd }) => ({

        symbol,

        name,

        marketCapUsd,

        priceUsd,

      }))(coins[i]);





      await coinModels.findOneAndUpdate(data, data, { upsert: true });

    }



    const data1 = await coinModels.find()

    res.status(200).send({ msg: "coins", data: data1 });




  } catch (err) {

    console.log(err.message);

    res.status(500).send({ msg: "Some error occured" });

  }

};

module.exports.getCoin = getCoin;