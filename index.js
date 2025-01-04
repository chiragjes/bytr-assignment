const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);

  let total = newItemPrice + cartTotal;

  res.send(total.toString());
});

app.get('/membership-discount', (req, res) => {
  let isMember = req.query.isMember;
  let cartTotal = parseFloat(req.query.cartTotal);
  if (isMember === 'true') {
    let discTotal = cartTotal * 0.9;
    res.send(discTotal.toString());
  } else {
    res.send(cartTotal.toString());
  }
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let postTax = cartTotal * 0.05;

  res.send(postTax.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);

  let days;
  if (shippingMethod === 'standard') {
    days = distance / 50;
  } else if (shippingMethod === 'express') {
    days = distance / 100;
  }
  res.send(days.toString());
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * 2;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
