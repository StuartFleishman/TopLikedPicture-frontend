const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { response } = require("express");

const stripe = require('stripe')('sk_test_51JNIcRCZzbqBIQx8rRByxnb7bWBNwlk4WIKuUGiKXXm02TDeieWGTNrawt46QncV5Szo1Bf7akLtTYhWquhVl1V700QAoNxTFS')

const app = express()

app.use(cors({ origin: true }))

app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total
})

exports.api = functions.https.onRequest(app)