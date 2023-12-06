const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test
test("Return Entity from a CALL", async () => {
  //Belarus
  expect(dxcc.getEntityFromCallsign("EW8KO")).toEqual({ entity: "Belarus" });

  // Brazil
  expect(dxcc.getEntityFromCallsign("PU3IKE")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PY3WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PR8WW")).toEqual({ entity: "Brasil" });

  //England
  expect(dxcc.getEntityFromCallsign("G6WRW")).toEqual({ entity: "England" });
  expect(dxcc.getEntityFromCallsign("M0PNN")).toEqual({ entity: "England" });
  expect(dxcc.getEntityFromCallsign("MI0ILE")).toEqual({ entity: "England" });

  //Estonia
  expect(dxcc.getEntityFromCallsign("ES3RF")).toEqual({ entity: "Estonia" });

  //France
  expect(dxcc.getEntityFromCallsign("F4HAB")).toEqual({ entity: "France" });

  //Germany
  expect(dxcc.getEntityFromCallsign("DG9BFC")).toEqual({ entity: "Germany" });

  //Israel
  expect(dxcc.getEntityFromCallsign("4Z75TL")).toEqual({ entity: "Israel" });

  //Italy
  expect(dxcc.getEntityFromCallsign("IK2WRI")).toEqual({ entity: "Italy" });
  expect(dxcc.getEntityFromCallsign("IU8MHG")).toEqual({ entity: "Italy" });
  expect(dxcc.getEntityFromCallsign("IZ1VWE")).toEqual({ entity: "Italy" });

  //Portugal
  expect(dxcc.getEntityFromCallsign("CT2GVH")).toEqual({ entity: "Portugal" });

  //Spain
  expect(dxcc.getEntityFromCallsign("EA3EA")).toEqual({ entity: "Spain" });

  //Switzerland
  expect(dxcc.getEntityFromCallsign("HB9DVZ")).toEqual({
    entity: "Switzerland",
  });
});
