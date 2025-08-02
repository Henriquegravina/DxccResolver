const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Andorra
expect(dxcc.getEntityFromCallsign("C31CT ")).toEqual({ entity: "Andorra" });

//Algeria
expect(dxcc.getEntityFromCallsign("7X2TT ")).toEqual({ entity: "Algeria" });

//Armenia
expect(dxcc.getEntityFromCallsign("EK/RX3DPK ")).toEqual({
  entity: "Armenia",
});

// Brazil
test("Brazil call tests", async () => {
  expect(dxcc.getEntityFromCallsign("PU3IKE")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PY3WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PR8WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("ZY0FUN")).toEqual({ entity: "Brasil" });
});


//Belarus
expect(dxcc.getEntityFromCallsign("EW8KO")).toEqual({ entity: "Belarus" });

//Belgium
expect(dxcc.getEntityFromCallsign("ON4CGW")).toEqual({ entity: "Belgium" });

//Croatia
expect(dxcc.getEntityFromCallsign("9A/OE3CQB")).toEqual({ entity: "Croatia" });

//China
test("China call tests", async () => {
  expect(dxcc.getEntityFromCallsign("BG9HKP")).toEqual({ entity: "China" });
  expect(dxcc.getEntityFromCallsign("BI1MHK")).toEqual({ entity: "China" });
  expect(dxcc.getEntityFromCallsign("B100IARU")).toEqual({ entity: "China" });
  expect(dxcc.getEntityFromCallsign("BD9GQ")).toEqual({ entity: "China" });
});

//England
test("England call tests", async () => {
  expect(dxcc.getEntityFromCallsign("GE8BCG")).toEqual({ entity: "England" });
  expect(dxcc.getEntityFromCallsign("G6WRW")).toEqual({ entity: "England" });
  expect(dxcc.getEntityFromCallsign("M0PNN")).toEqual({ entity: "England" });
  expect(dxcc.getEntityFromCallsign("MI0ILE")).toEqual({ entity: "England" });
});

//Italy
test("Italy call tests", async () => {
  expect(dxcc.getEntityFromCallsign("IK2WRI")).toEqual({ entity: "Italy" });
  expect(dxcc.getEntityFromCallsign("IU8MHG")).toEqual({ entity: "Italy" });
  expect(dxcc.getEntityFromCallsign("IZ1VWE")).toEqual({ entity: "Italy" });
});

//India and Others
test("India call tests", async () => {
  expect(dxcc.getEntityFromCallsign("VU2PZA")).toEqual({ entity: "India" });
  expect(dxcc.getEntityFromCallsign("VU3YWY")).toEqual({ entity: "India" });
  
  expect(dxcc.getEntityFromCallsign("VU7T")).toEqual({ entity: "Lakshadweep Is." });
  
});

//Indonesia
expect(dxcc.getEntityFromCallsign("8A100IARU")).toEqual({ entity: "Indonesia" });

//Lakshadweep Is.
test("Lakshadweep Is. call tests", async () => {
  expect(dxcc.getEntityFromCallsign("VU7T")).toEqual({ entity: "Lakshadweep Is." });
});

//Laos
test("Laos call tests", async () => {
  expect(dxcc.getEntityFromCallsign("XW4KV")).toEqual({ entity: "Laos" });
});

//Nigeria
test("Nigeria call tests", async () => {
  expect(dxcc.getEntityFromCallsign("5N9DTG")).toEqual({ entity: "Nigeria" });
});

//Norway
test("Norway call tests", async () => {
  expect(dxcc.getEntityFromCallsign("LA/DL2RZE/P")).toEqual({ entity: "Norway" });
  expect(dxcc.getEntityFromCallsign("LA0FA")).toEqual({ entity: "Norway" });
});

//Portugal
test("Portugal call tests", async () => {
  expect(dxcc.getEntityFromCallsign("CS5DX")).toEqual({ entity: "Portugal" });
  expect(dxcc.getEntityFromCallsign("CR5IARU")).toEqual({ entity: "Portugal" });
  expect(dxcc.getEntityFromCallsign("CT2GVH")).toEqual({ entity: "Portugal" });
  expect(dxcc.getEntityFromCallsign("CS2025HNY ")).toEqual({
    entity: "Portugal",
  });
});

//Svalbard
test("Taiwan call tests", async () => {
    expect(dxcc.getEntityFromCallsign("JW7XK")).toEqual({ entity: "Svalbard" });
  });
//Taiwan
test("Taiwan call tests", async () => {
  expect(dxcc.getEntityFromCallsign("BV9K")).toEqual({ entity: "Taiwan" });
});

//Thailand
test("Thailand call tests", async () => {
  expect(dxcc.getEntityFromCallsign("HS100IARU")).toEqual({ entity: "Thailand" });
  expect(dxcc.getEntityFromCallsign("HS30DXA")).toEqual({ entity: "Thailand" });
});

// Test
test("Return Entity from a CALL", async () => {
  //expect(dxcc.getEntityFromCallsign("")).toEqual({ entity: "" });

  //Estonia
  expect(dxcc.getEntityFromCallsign("ES3RF")).toEqual({ entity: "Estonia" });

  //France
  expect(dxcc.getEntityFromCallsign("F4HAB")).toEqual({ entity: "France" });

  //Germany
  expect(dxcc.getEntityFromCallsign("DG9BFC")).toEqual({ entity: "Germany" });

  //Greece
  expect(dxcc.getEntityFromCallsign("SV1CEV")).toEqual({ entity: "Greece" });

  //India
  expect(dxcc.getEntityFromCallsign("VU2SAA")).toEqual({ entity: "India" });

  //Israel
  expect(dxcc.getEntityFromCallsign("4Z75TL")).toEqual({ entity: "Israel" });


  //Romenia
  expect(dxcc.getEntityFromCallsign("YO7CW")).toEqual({ entity: "Romenia" });

  //South Africa
  expect(dxcc.getEntityFromCallsign("ZS6CR")).toEqual({
    entity: "South Africa",
  });

  //Spain
  expect(dxcc.getEntityFromCallsign("EA3EA")).toEqual({ entity: "Spain" });
  expect(dxcc.getEntityFromCallsign("AO8EU")).toEqual({ entity: "Spain" });

  //Sweden
  expect(dxcc.getEntityFromCallsign("SM3LBN")).toEqual({ entity: "Sweden" });

  // Denmark
  expect(dxcc.getEntityFromCallsign("5Q1BM")).toEqual({ entity: "Denmark" });
  expect(dxcc.getEntityFromCallsign("OZ1BM")).toEqual({ entity: "Denmark" });

  //Switzerland
  expect(dxcc.getEntityFromCallsign("HB9DVZ")).toEqual({
    entity: "Switzerland",
  });

  //Mayotte
  expect(dxcc.getEntityFromCallsign("TO8FH")).toEqual({
    entity: "Mayotte",
  });

  
  //Madagascar
  expect(dxcc.getEntityFromCallsign("5R8IC")).toEqual({
    entity: "Madagascar",
  });

  //Montenegro
  expect(dxcc.getEntityFromCallsign("4O4A")).toEqual({
    entity: "Montenegro",
  });

  //Morocco
  expect(dxcc.getEntityFromCallsign("CN3A")).toEqual({entity: "Morocco",});
  expect(dxcc.getEntityFromCallsign("CN8AAK")).toEqual({entity: "Morocco",});


  //Paraguay
  expect(dxcc.getEntityFromCallsign("ZP1IKE")).toEqual({
    entity: "Paraguay",
  });

  //Oman
  expect(dxcc.getEntityFromCallsign("A41ZZ")).toEqual({
    entity: "Oman",
  });

  //United Arab Emirates
  expect(dxcc.getEntityFromCallsign("A65BP ")).toEqual({
    entity: "United Arab Emirates",
  });

  //United Nations HQ
  expect(dxcc.getEntityFromCallsign("4U1UN ")).toEqual({
    entity: "United Nations HQ",
  });

  //West Malasya
  expect(dxcc.getEntityFromCallsign("9M2CQC")).toEqual({
    entity: "West Malasya",
  });

  // Sri Lanka
  expect(dxcc.getEntityFromCallsign("4S6ARW")).toEqual({
    entity: "Sri Lanka",
  });

  //Singapure
  expect(dxcc.getEntityFromCallsign("9V1EO")).toEqual({
    entity: "Singapore",
  });


});