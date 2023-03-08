/* eslint-disable indent */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51Mdm8vLkCWpOvKuphmAfcYJo8SKWhNowc2OvQHkng0htEj1WXrTAoUB9Apn4K0NNvpLD8OOc463L0S9OXTCBQbW700AGyhUrea"
);

const app = express();

// eslint-disable-next-line object-curly-spacing
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("안녕"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(" payment.js에서 가져온 total의 양은 다음과 같다!!  ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/fir-b5b2c/us-central1/api
