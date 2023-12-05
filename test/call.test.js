const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test
test("Return Json from a CALL", async () => {
  // Brazil
  expect(dxcc.getEntityFromCallsign("PU3IKE")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PY3WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PR8WW")).toEqual({ entity: "Brasil" });

  //Israel
  expect(dxcc.getEntityFromCallsign("4Z75TL")).toEqual({ entity: "Israel" });

  //Portugal
  expect(dxcc.getEntityFromCallsign("CT2GVH")).toEqual({ entity: "Portugal" });

  //Spain
  expect(dxcc.getEntityFromCallsign("EA3EA")).toEqual({ entity: "Spain" });

  //France
  expect(dxcc.getEntityFromCallsign("F4HAB")).toEqual({ entity: "France" });
});
