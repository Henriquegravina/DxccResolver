const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Brazil
test("Brazil call tests", async () => {
  expect(dxcc.getEntityFromCallsign("PU3IKE")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PY3WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PR8WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("ZY0FUN")).toEqual({ entity: "Brasil" });
});

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

  //Belarus
  expect(dxcc.getEntityFromCallsign("EW8KO")).toEqual({ entity: "Belarus" });

  //Belgium
  expect(dxcc.getEntityFromCallsign("ON4CGW")).toEqual({ entity: "Belgium" });

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

  //Romenia
  expect(dxcc.getEntityFromCallsign("YO7CW")).toEqual({ entity: "Romenia" });

  //South Africa
  expect(dxcc.getEntityFromCallsign("ZS6CR")).toEqual({
    entity: "South Africa",
  });

  //Spain
  expect(dxcc.getEntityFromCallsign("EA3EA")).toEqual({ entity: "Spain" });

  //Sweden
  expect(dxcc.getEntityFromCallsign("SM3LBN")).toEqual({ entity: "Sweden" });

  //Switzerland
  expect(dxcc.getEntityFromCallsign("HB9DVZ")).toEqual({
    entity: "Switzerland",
  });
});
