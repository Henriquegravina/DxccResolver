const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test
test("Return Json from a CALL", async () => {
  // Brazil
  expect(dxcc.getCountryFromCallsign("PU3IKE")).toEqual({
    callsign: "PU3IKE",
    dxcc: 108,
    entity: "Brasil",
  });

  expect(dxcc.getCountryFromCallsign("PY3WW")).toEqual({
    callsign: "PY3WW",
    dxcc: 108,
    entity: "Brasil",
  });
});
