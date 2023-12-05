const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test
test("Return Json from a CALL", async () => {
  // Brazil
  expect(dxcc.getEntityFromCallsign("PU3IKE")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PY3WW")).toEqual({ entity: "Brasil" });
  expect(dxcc.getEntityFromCallsign("PR8WW")).toEqual({ entity: "Brasil" });
  
});
