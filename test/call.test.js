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

//Cameroon
expect(dxcc.getEntityFromCallsign("TJ1GD")).toEqual({ entity: "Cameroon" });


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
test("Svalbard call tests", async () => {
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

  //Romania
  expect(dxcc.getEntityFromCallsign("YO7CW")).toEqual({ entity: "Romania" });

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

  //West Malaysia
  expect(dxcc.getEntityFromCallsign("9M2CQC")).toEqual({
    entity: "West Malaysia",
  });

  // Sri Lanka
  expect(dxcc.getEntityFromCallsign("4S6ARW")).toEqual({
    entity: "Sri Lanka",
  });

  //Singapore
  expect(dxcc.getEntityFromCallsign("9V1EO")).toEqual({
    entity: "Singapore",
  });
});

// New entities - Africa
test("Africa new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("3C1A")).toEqual({ entity: "Equatorial Guinea" });
  expect(dxcc.getEntityFromCallsign("3C0W")).toEqual({ entity: "Annobon I." });
  expect(dxcc.getEntityFromCallsign("3DA0RS")).toEqual({ entity: "Swaziland" });
  expect(dxcc.getEntityFromCallsign("3V8BB")).toEqual({ entity: "Tunisia" });
  expect(dxcc.getEntityFromCallsign("3X1A")).toEqual({ entity: "Guinea" });
  expect(dxcc.getEntityFromCallsign("5A1A")).toEqual({ entity: "Libya" });
  expect(dxcc.getEntityFromCallsign("5H3EE")).toEqual({ entity: "Tanzania" });
  expect(dxcc.getEntityFromCallsign("5T5PA")).toEqual({ entity: "Mauritania" });
  expect(dxcc.getEntityFromCallsign("5U5R")).toEqual({ entity: "Niger" });
  expect(dxcc.getEntityFromCallsign("5X1NH")).toEqual({ entity: "Uganda" });
  expect(dxcc.getEntityFromCallsign("5Z4VJ")).toEqual({ entity: "Kenya" });
  expect(dxcc.getEntityFromCallsign("6W1RY")).toEqual({ entity: "Senegal" });
  expect(dxcc.getEntityFromCallsign("7P8MM")).toEqual({ entity: "Lesotho" });
  expect(dxcc.getEntityFromCallsign("7Q7BP")).toEqual({ entity: "Malawi" });
  expect(dxcc.getEntityFromCallsign("9L1YXJ")).toEqual({ entity: "Sierra Leone" });
  expect(dxcc.getEntityFromCallsign("9J2BO")).toEqual({ entity: "Zambia" });
  expect(dxcc.getEntityFromCallsign("9U4T")).toEqual({ entity: "Burundi" });
  expect(dxcc.getEntityFromCallsign("9X0T")).toEqual({ entity: "Rwanda" });
  expect(dxcc.getEntityFromCallsign("A25A")).toEqual({ entity: "Botswana" });
  expect(dxcc.getEntityFromCallsign("D44AC")).toEqual({ entity: "Cape Verde" });
  expect(dxcc.getEntityFromCallsign("D68CCC")).toEqual({ entity: "Comoros" });
  expect(dxcc.getEntityFromCallsign("E31A")).toEqual({ entity: "Eritrea" });
  expect(dxcc.getEntityFromCallsign("ET3AA")).toEqual({ entity: "Ethiopia" });
  expect(dxcc.getEntityFromCallsign("EL2A")).toEqual({ entity: "Liberia" });
  expect(dxcc.getEntityFromCallsign("XT2AW")).toEqual({ entity: "Burkina Faso" });
  expect(dxcc.getEntityFromCallsign("TZ4AM")).toEqual({ entity: "Mali" });
  expect(dxcc.getEntityFromCallsign("ST2AR")).toEqual({ entity: "Sudan" });
  expect(dxcc.getEntityFromCallsign("SU1SK")).toEqual({ entity: "Egypt" });
  expect(dxcc.getEntityFromCallsign("6O1OO")).toEqual({ entity: "Somalia" });
  expect(dxcc.getEntityFromCallsign("J28NH")).toEqual({ entity: "Djibouti" });
  expect(dxcc.getEntityFromCallsign("S01WS")).toEqual({ entity: "Western Sahara" });
  expect(dxcc.getEntityFromCallsign("S79W")).toEqual({ entity: "Seychelles" });
  expect(dxcc.getEntityFromCallsign("S9DX")).toEqual({ entity: "Sao Tome & Principe" });
  expect(dxcc.getEntityFromCallsign("V51WH")).toEqual({ entity: "Namibia" });
  expect(dxcc.getEntityFromCallsign("Z81D")).toEqual({ entity: "South Sudan" });
  expect(dxcc.getEntityFromCallsign("ZD7BG")).toEqual({ entity: "St. Helena" });
  expect(dxcc.getEntityFromCallsign("ZD8W")).toEqual({ entity: "Ascension I." });
  expect(dxcc.getEntityFromCallsign("ZD9ZS")).toEqual({ entity: "Tristan da Cunha" });
  expect(dxcc.getEntityFromCallsign("ZS8Z")).toEqual({ entity: "Prince Edward & Marion Is." });
  expect(dxcc.getEntityFromCallsign("C91PA")).toEqual({ entity: "Mozambique" });
});

// New entities - Americas
test("Americas new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("6Y5IC")).toEqual({ entity: "Jamaica" });
  expect(dxcc.getEntityFromCallsign("8P6SH")).toEqual({ entity: "Barbados" });
  expect(dxcc.getEntityFromCallsign("8R1AK")).toEqual({ entity: "Guyana" });
  expect(dxcc.getEntityFromCallsign("9Y4W")).toEqual({ entity: "Trinidad & Tobago" });
  expect(dxcc.getEntityFromCallsign("C6AKQ")).toEqual({ entity: "Bahamas" });
  expect(dxcc.getEntityFromCallsign("CA3SOC")).toEqual({ entity: "Chile" });
  expect(dxcc.getEntityFromCallsign("CE0Y")).toEqual({ entity: "Easter I." });
  expect(dxcc.getEntityFromCallsign("CO8LY")).toEqual({ entity: "Cuba" });
  expect(dxcc.getEntityFromCallsign("CP1XRM")).toEqual({ entity: "Bolivia" });
  expect(dxcc.getEntityFromCallsign("CX2SA")).toEqual({ entity: "Uruguay" });
  expect(dxcc.getEntityFromCallsign("HC5VF")).toEqual({ entity: "Ecuador" });
  expect(dxcc.getEntityFromCallsign("HC8N")).toEqual({ entity: "Galapagos Is." });
  expect(dxcc.getEntityFromCallsign("HH2AA")).toEqual({ entity: "Haiti" });
  expect(dxcc.getEntityFromCallsign("HI3K")).toEqual({ entity: "Dominican Republic" });
  expect(dxcc.getEntityFromCallsign("HK3W")).toEqual({ entity: "Colombia" });
  expect(dxcc.getEntityFromCallsign("HP1AVS")).toEqual({ entity: "Panama" });
  expect(dxcc.getEntityFromCallsign("HR2J")).toEqual({ entity: "Honduras" });
  expect(dxcc.getEntityFromCallsign("TG9AJR")).toEqual({ entity: "Guatemala" });
  expect(dxcc.getEntityFromCallsign("TI2CC")).toEqual({ entity: "Costa Rica" });
  expect(dxcc.getEntityFromCallsign("YN2N")).toEqual({ entity: "Nicaragua" });
  expect(dxcc.getEntityFromCallsign("YS1YS")).toEqual({ entity: "El Salvador" });
  expect(dxcc.getEntityFromCallsign("LU1DZ")).toEqual({ entity: "Argentina" });
  expect(dxcc.getEntityFromCallsign("OA4O")).toEqual({ entity: "Peru" });
  expect(dxcc.getEntityFromCallsign("YV5IAL")).toEqual({ entity: "Venezuela" });
  expect(dxcc.getEntityFromCallsign("XE1MEX")).toEqual({ entity: "Mexico" });
  expect(dxcc.getEntityFromCallsign("KP4AA")).toEqual({ entity: "Puerto Rico" });
  expect(dxcc.getEntityFromCallsign("KP2M")).toEqual({ entity: "Virgin Is." });
  expect(dxcc.getEntityFromCallsign("VP9HE")).toEqual({ entity: "Bermuda" });
  expect(dxcc.getEntityFromCallsign("ZF1A")).toEqual({ entity: "Cayman Is." });
  expect(dxcc.getEntityFromCallsign("FY5KE")).toEqual({ entity: "French Guiana" });
  expect(dxcc.getEntityFromCallsign("FG5LA")).toEqual({ entity: "Guadeloupe" });
  expect(dxcc.getEntityFromCallsign("FM5WD")).toEqual({ entity: "Martinique" });
  expect(dxcc.getEntityFromCallsign("FP5EK")).toEqual({ entity: "St. Pierre & Miquelon" });
  expect(dxcc.getEntityFromCallsign("V26K")).toEqual({ entity: "Antigua & Barbuda" });
  expect(dxcc.getEntityFromCallsign("V31MA")).toEqual({ entity: "Belize" });
  expect(dxcc.getEntityFromCallsign("V47T")).toEqual({ entity: "St. Kitts & Nevis" });
  expect(dxcc.getEntityFromCallsign("VP2EAQ")).toEqual({ entity: "Anguilla" });
  expect(dxcc.getEntityFromCallsign("VP2MDD")).toEqual({ entity: "Montserrat" });
  expect(dxcc.getEntityFromCallsign("VP2V/N3DXX")).toEqual({ entity: "British Virgin Is." });
  expect(dxcc.getEntityFromCallsign("VP5S")).toEqual({ entity: "Turks & Caicos Is." });
  expect(dxcc.getEntityFromCallsign("VP8LP")).toEqual({ entity: "Falkland Is." });
  expect(dxcc.getEntityFromCallsign("P40W")).toEqual({ entity: "Aruba" });
  expect(dxcc.getEntityFromCallsign("PJ2T")).toEqual({ entity: "Curacao" });
  expect(dxcc.getEntityFromCallsign("PJ4A")).toEqual({ entity: "Bonaire" });
  expect(dxcc.getEntityFromCallsign("PJ5A")).toEqual({ entity: "Saba & St. Eustatius" });
  expect(dxcc.getEntityFromCallsign("PJ7A")).toEqual({ entity: "St Maarten" });
  expect(dxcc.getEntityFromCallsign("KH6LC")).toEqual({ entity: "Hawaii" });
  expect(dxcc.getEntityFromCallsign("KH2F")).toEqual({ entity: "Guam" });
  expect(dxcc.getEntityFromCallsign("KH8B")).toEqual({ entity: "American Samoa" });
  expect(dxcc.getEntityFromCallsign("OX3LX")).toEqual({ entity: "Greenland" });
  expect(dxcc.getEntityFromCallsign("FS4WBS")).toEqual({ entity: "Saint Martin" });
  expect(dxcc.getEntityFromCallsign("FJ4T")).toEqual({ entity: "Saint Barthelemy" });
  expect(dxcc.getEntityFromCallsign("CE9XX")).toEqual({ entity: "Antarctica" });
  expect(dxcc.getEntityFromCallsign("KC4AAA")).toEqual({ entity: "Antarctica" });
});

// New entities - Asia
test("Asia new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("3W3B")).toEqual({ entity: "Viet Nam" });
  expect(dxcc.getEntityFromCallsign("XV9DX")).toEqual({ entity: "Viet Nam" });
  expect(dxcc.getEntityFromCallsign("4J5A")).toEqual({ entity: "Azerbaijan" });
  expect(dxcc.getEntityFromCallsign("4L0A")).toEqual({ entity: "Georgia" });
  expect(dxcc.getEntityFromCallsign("4W6A")).toEqual({ entity: "Timor-Leste" });
  expect(dxcc.getEntityFromCallsign("5B4AIF")).toEqual({ entity: "Cyprus" });
  expect(dxcc.getEntityFromCallsign("C4Z")).toEqual({ entity: "Cyprus" });
  expect(dxcc.getEntityFromCallsign("P33W")).toEqual({ entity: "Cyprus" });
  expect(dxcc.getEntityFromCallsign("7O2A")).toEqual({ entity: "Yemen" });
  expect(dxcc.getEntityFromCallsign("8Q7CQ")).toEqual({ entity: "Maldives" });
  expect(dxcc.getEntityFromCallsign("9N1MM")).toEqual({ entity: "Nepal" });
  expect(dxcc.getEntityFromCallsign("A52CC")).toEqual({ entity: "Bhutan" });
  expect(dxcc.getEntityFromCallsign("EP2LMA")).toEqual({ entity: "Iran" });
  expect(dxcc.getEntityFromCallsign("EX8MLT")).toEqual({ entity: "Kyrgyzstan" });
  expect(dxcc.getEntityFromCallsign("EY8MM")).toEqual({ entity: "Tajikistan" });
  expect(dxcc.getEntityFromCallsign("EZ8BO")).toEqual({ entity: "Turkmenistan" });
  expect(dxcc.getEntityFromCallsign("HZ1HZ")).toEqual({ entity: "Saudi Arabia" });
  expect(dxcc.getEntityFromCallsign("HL5BDS")).toEqual({ entity: "Republic of Korea" });
  expect(dxcc.getEntityFromCallsign("JA1BK")).toEqual({ entity: "Japan" });
  expect(dxcc.getEntityFromCallsign("JT1CO")).toEqual({ entity: "Mongolia" });
  expect(dxcc.getEntityFromCallsign("JY5HX")).toEqual({ entity: "Jordan" });
  expect(dxcc.getEntityFromCallsign("YI1RZ")).toEqual({ entity: "Iraq" });
  expect(dxcc.getEntityFromCallsign("UK8DX")).toEqual({ entity: "Uzbekistan" });
  expect(dxcc.getEntityFromCallsign("XU7AEE")).toEqual({ entity: "Cambodia" });
  expect(dxcc.getEntityFromCallsign("XY5T")).toEqual({ entity: "Myanmar" });
  expect(dxcc.getEntityFromCallsign("XX9TYT")).toEqual({ entity: "Macao" });
  expect(dxcc.getEntityFromCallsign("VR2XMT")).toEqual({ entity: "Hong Kong" });
  expect(dxcc.getEntityFromCallsign("T6AA")).toEqual({ entity: "Afghanistan" });
  expect(dxcc.getEntityFromCallsign("E41A")).toEqual({ entity: "Palestine" });
  expect(dxcc.getEntityFromCallsign("S21RC")).toEqual({ entity: "Bangladesh" });
  expect(dxcc.getEntityFromCallsign("BS7H")).toEqual({ entity: "Scarborough Reef" });
});

// New entities - Europe
test("Europe new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("3A2MW")).toEqual({ entity: "Monaco" });
  expect(dxcc.getEntityFromCallsign("1A0KM")).toEqual({ entity: "Sovereign Military Order of Malta" });
  expect(dxcc.getEntityFromCallsign("4U1ITU")).toEqual({ entity: "ITU HQ" });
  expect(dxcc.getEntityFromCallsign("ER3CT")).toEqual({ entity: "Moldova" });
  expect(dxcc.getEntityFromCallsign("HB0WR")).toEqual({ entity: "Liechtenstein" });
  expect(dxcc.getEntityFromCallsign("T77C")).toEqual({ entity: "San Marino" });
  expect(dxcc.getEntityFromCallsign("ZA1E")).toEqual({ entity: "Albania" });
  expect(dxcc.getEntityFromCallsign("ZB2FK")).toEqual({ entity: "Gibraltar" });
  expect(dxcc.getEntityFromCallsign("OH0Z")).toEqual({ entity: "Aland Is." });
  expect(dxcc.getEntityFromCallsign("OJ0B")).toEqual({ entity: "Market Reef" });
  expect(dxcc.getEntityFromCallsign("JX7DFA")).toEqual({ entity: "Jan Mayen" });
  expect(dxcc.getEntityFromCallsign("R1FJT")).toEqual({ entity: "Franz Josef Land" });
});

// New entities - Oceania
test("Oceania new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("3D2AG")).toEqual({ entity: "Fiji" });
  expect(dxcc.getEntityFromCallsign("A35JT")).toEqual({ entity: "Tonga" });
  expect(dxcc.getEntityFromCallsign("C21GJ")).toEqual({ entity: "Nauru" });
  expect(dxcc.getEntityFromCallsign("9M6NA")).toEqual({ entity: "East Malaysia" });
  expect(dxcc.getEntityFromCallsign("DU1IST")).toEqual({ entity: "Philippines" });
  expect(dxcc.getEntityFromCallsign("5W0GC")).toEqual({ entity: "Samoa" });
  expect(dxcc.getEntityFromCallsign("P29VCX")).toEqual({ entity: "Papua New Guinea" });
  expect(dxcc.getEntityFromCallsign("H44MS")).toEqual({ entity: "Solomon Is." });
  expect(dxcc.getEntityFromCallsign("YJ0A")).toEqual({ entity: "Vanuatu" });
  expect(dxcc.getEntityFromCallsign("FK8IK")).toEqual({ entity: "New Caledonia" });
  expect(dxcc.getEntityFromCallsign("FO5RH")).toEqual({ entity: "French Polynesia" });
  expect(dxcc.getEntityFromCallsign("FW5JJ")).toEqual({ entity: "Wallis & Futuna" });
  expect(dxcc.getEntityFromCallsign("T88DX")).toEqual({ entity: "Palau" });
  expect(dxcc.getEntityFromCallsign("T2AQ")).toEqual({ entity: "Tuvalu" });
  expect(dxcc.getEntityFromCallsign("T30L")).toEqual({ entity: "W. Kiribati" });
  expect(dxcc.getEntityFromCallsign("V63DX")).toEqual({ entity: "Micronesia" });
  expect(dxcc.getEntityFromCallsign("V73NS")).toEqual({ entity: "Marshall Is." });
  expect(dxcc.getEntityFromCallsign("V85NPQ")).toEqual({ entity: "Brunei" });
  expect(dxcc.getEntityFromCallsign("ZL1BYZ")).toEqual({ entity: "New Zealand" });
  expect(dxcc.getEntityFromCallsign("ZL7DX")).toEqual({ entity: "Chatham Is." });
  expect(dxcc.getEntityFromCallsign("ZL8X")).toEqual({ entity: "Kermadec Is." });
  expect(dxcc.getEntityFromCallsign("VK9NF")).toEqual({ entity: "Norfolk I." });
  expect(dxcc.getEntityFromCallsign("VK9XX")).toEqual({ entity: "Christmas I." });
  expect(dxcc.getEntityFromCallsign("VK9CZ")).toEqual({ entity: "Cocos (Keeling) Is." });
  expect(dxcc.getEntityFromCallsign("VK9LM")).toEqual({ entity: "Lord Howe I." });
  expect(dxcc.getEntityFromCallsign("VP6AH")).toEqual({ entity: "Pitcairn I." });
  expect(dxcc.getEntityFromCallsign("ZK3E")).toEqual({ entity: "Tokelau Is." });
});

// New entities - Other
test("Other new entities call tests", async () => {
  expect(dxcc.getEntityFromCallsign("3Y0BHO")).toEqual({ entity: "Bouvet I." });
  expect(dxcc.getEntityFromCallsign("3Y0PI")).toEqual({ entity: "Peter 1 I." });
});
