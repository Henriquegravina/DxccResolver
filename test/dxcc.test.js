const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test to Dxcc code to country:
test("DXCC name by given code number", async () => {
  //Agalega & St. Brandon Is.
  expect(dxcc.getCountryFromDxcc(4)).toEqual("Agalega & St. Brandon Is.");

  

  //Canada
  expect(dxcc.getCountryFromDxcc(362)).toEqual("Canada");
  
  //China
  expect(dxcc.getCountryFromDxcc(318)).toEqual("China");
  
  //Estonia
  expect(dxcc.getCountryFromDxcc(52)).toEqual("Estonia");
  
  //Germany
  expect(dxcc.getCountryFromDxcc(230)).toEqual("Germany");
  
  //Greece
  expect(dxcc.getCountryFromDxcc(236)).toEqual("Greece");
  
  //Italy
  expect(dxcc.getCountryFromDxcc(225)).toEqual("Sardinia");
  expect(dxcc.getCountryFromDxcc(248)).toEqual("Italy");

  //India
  expect(dxcc.getCountryFromDxcc(324)).toEqual("India");
  
  //Indonesia
  expect(dxcc.getCountryFromDxcc(327)).toEqual("Indonesia");

  //Lebanon
  expect(dxcc.getCountryFromDxcc(354)).toEqual("Estonia");

  // Laos
  expect(dxcc.getCountryFromDxcc(143)).toEqual("Laos");

  //Lakshadweep Is.
  expect(dxcc.getCountryFromDxcc(142)).toEqual("Lakshadweep Is.");

  //Mauritius
  expect(dxcc.getCountryFromDxcc(165)).toEqual("Mauritius");

  //Morocco
  expect(dxcc.getCountryFromDxcc(446)).toEqual("Morocco");

  //Nigeria
  expect(dxcc.getCountryFromDxcc(450)).toEqual("Nigeria");


  //Rodriguez I.
  expect(dxcc.getCountryFromDxcc(207)).toEqual("Rodriguez I.");
  
  //Serbia
  expect(dxcc.getCountryFromDxcc(296)).toEqual("Serbia");
  
  //Sri Lanka
  expect(dxcc.getCountryFromDxcc(315)).toEqual("Sri Lanka");
  
  //Singapore
  expect(dxcc.getCountryFromDxcc(381)).toEqual("Singapore");

  //Svalbard
  expect(dxcc.getCountryFromDxcc(259)).toEqual("Svalbard");
  

  //Taiwan
  expect(dxcc.getCountryFromDxcc(386)).toEqual("Taiwan");

  //Thailand
  expect(dxcc.getCountryFromDxcc(387)).toEqual("Thailand");

  //USA
  expect(dxcc.getCountryFromDxcc(6)).toEqual("Alaska");
  expect(dxcc.getCountryFromDxcc(291)).toEqual("United States");
  


 });
