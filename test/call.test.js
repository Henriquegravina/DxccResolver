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

//England
test("England call tests", async () => {
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

  //Portugal
  expect(dxcc.getEntityFromCallsign("CT2GVH")).toEqual({ entity: "Portugal" });
  expect(dxcc.getEntityFromCallsign("CS2025HNY ")).toEqual({
    entity: "Portugal",
  });

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

  //Montenegro
  expect(dxcc.getEntityFromCallsign("4O4A")).toEqual({
    entity: "Montenegro",
  });

  //Madagascar
  expect(dxcc.getEntityFromCallsign("5R8IC")).toEqual({
    entity: "Madagascar",
  });

  //West Malasya
  expect(dxcc.getEntityFromCallsign("9M2CQC")).toEqual({
    entity: "West Malasya",
  });

  //Oman
  expect(dxcc.getEntityFromCallsign("A41ZZ")).toEqual({
    entity: "Oman",
  });
});
