const axios = require("axios");

res.status(200). send( { data: userDetails } )

const Temp = async function (req, res) {
  try {
    let city = req.query.q
    let api = req.query.appid

    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    };
    const londonTemp = await axios(options);


    let states = londonTemp.data.main.temp;
    console.log("temp of London", states)
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  }
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};








const getDistrictsList = async function (req, res) {

  try {
    let id = req.params.stateId
    console.log(" state: ", id)

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
    }
    let response = await axios(options)

    let districts = response.data

    console.log(response.data)
    res.status(200).send({ msg: "Success", data: districts })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

const getByPin = async function (req, res) {

  try {

    let pin = req.query.pincode
    let date = req.query.date

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let response = await axios(options)



    let centers = response.data
    console.log(centers)
    res.status(200).send({ msg: "Success", data: centers })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}


const getOtp = async function (req, res) {

  try {

    let options = {
      method: "post", // method has to be post
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: { "mobile": req.body.mobile } // we are sending the json body in the data 
    }
    let response = await axios(options)

    let id = response.data
    res.status(200).send({ msg: "Success", data: id })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}




const getweather = async function (req, res) {
  try {

    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai",  "London","Moscow"]
    let cityObjArray = []
    

    for (i = 0; i<cities.length; i++) {
      let obj = { city: cities[i] }
      let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=45bc30c02d0410d8ed14e3ac4095d63f`)
      console.log(resp.data.main.temp)
      obj.temp = resp.data.main.temp
      cityObjArray.push(obj)
    }

    let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
    console.log(sorted)
    res.status(200).send({ status: true, data: sorted })

  } catch (error) {
    console.log(error)
    res.status(500).send({ status: false, msg: "Something went wrong" })


  }
}









module.exports.Temp = Temp;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getweather = getweather;