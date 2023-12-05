const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test to Dxcc code to country:
test("GET to /dxcc/number", async () => {
  //Agalega & St. Brandon Is.
  expect(dxcc.getCountryFromDxcc(4)).toEqual("Agalega & St. Brandon Is.");
  //Mauritius
  expect(dxcc.getCountryFromDxcc(165)).toEqual("Mauritius");
  //Rodriguez I.
  expect(dxcc.getCountryFromDxcc(207)).toEqual("Rodriguez I.");
  //USA
  expect(dxcc.getCountryFromDxcc(6)).toEqual("Alaska");
  expect(dxcc.getCountryFromDxcc(291)).toEqual("United States");
  // Canada
  expect(dxcc.getCountryFromDxcc(362)).toEqual("Canada");
  //Germany
  expect(dxcc.getCountryFromDxcc(230)).toEqual("Germany");
  //Estonia
  expect(dxcc.getCountryFromDxcc(52)).toEqual("Estonia");
  //Lebanon
  expect(dxcc.getCountryFromDxcc(354)).toEqual("Estonia");
  //Italy
  expect(dxcc.getCountryFromDxcc(225)).toEqual("Sardinia");
  expect(dxcc.getCountryFromDxcc(248)).toEqual("Italy");
  //Serbia
  expect(dxcc.getCountryFromDxcc(296)).toEqual("Serbia");
  //Greece
  expect(dxcc.getCountryFromDxcc(236)).toEqual("Greece");
});
