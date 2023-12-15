// Author: Henrique B. Gravina
// This code is a basic webserver to DXCC Resolver class.
// 2023/02/14

// DxccResolver
const { DxccEntities } = require("./dxccResolver.js");
const dxcc = new DxccEntities();

//WebService:
const express = require("express");
const app = express();

// Resolv by Callsign
app.get("/call/:callsign", (req, res) => {
  const { callsign } = req.params;
  const result = dxcc.getCountryFromCallsign(callsign.toUpperCase());
  res.json(result);
});

// Resolv by Callsign whit suffix like /m /p
app.get("/call/:callsign/:suffix", (req, res) => {
  const { callsign, suffix } = req.params;
  const result = dxcc.getCountryFromCallsign(callsign.toUpperCase());
  result.suffix = suffix.toUpperCase();
  res.json(result);
});

// Resolv by dxcc number
app.get("/dxcc/:dxcc_number", (req, res) => {
  const { dxcc_number } = req.params;
  const result = dxcc.getCountryFromDxcc(dxcc_number);
  res.json({ dxcc_name: result });
});

app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});

module.exports = app;
