const { DxccEntities } = require("../dxccResolver.js");
const dxcc = new DxccEntities();

// Test to Dxcc code to country:
test("DXCC name by given code number", async () => {
  //Agalega & St. Brandon Is.
  expect(dxcc.getCountryFromDxcc(4)).toEqual({ entity: "Agalega & St. Brandon Is.", continent: "AF", ituZone: 53, cqZone: 39 });

  //Canada
  expect(dxcc.getCountryFromDxcc(362)).toEqual({ entity: "Canada", continent: "NA", ituZone: 4, cqZone: 5 });

  //China
  expect(dxcc.getCountryFromDxcc(318)).toEqual({ entity: "China", continent: "AS", ituZone: 44, cqZone: 24 });

  //Estonia
  expect(dxcc.getCountryFromDxcc(52)).toEqual({ entity: "Estonia", continent: "EU", ituZone: 29, cqZone: 15 });

  //Faroe Is.
  expect(dxcc.getCountryFromDxcc(222)).toEqual({ entity: "Faroe Is.", continent: "EU", ituZone: 18, cqZone: 14 });

  expect(dxcc.getCountryFromDxcc(424)).toEqual({ entity: "Ghana", continent: "AF", ituZone: 46, cqZone: 35 });

  //Germany
  expect(dxcc.getCountryFromDxcc(230)).toEqual({ entity: "Germany", continent: "EU", ituZone: 28, cqZone: 14 });

  //Greece
  expect(dxcc.getCountryFromDxcc(236)).toEqual({ entity: "Greece", continent: "EU", ituZone: 28, cqZone: 20 });

  //Italy
  expect(dxcc.getCountryFromDxcc(225)).toEqual({ entity: "Sardinia", continent: "EU", ituZone: 28, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(248)).toEqual({ entity: "Italy", continent: "EU", ituZone: 28, cqZone: 15 });

  //India
  expect(dxcc.getCountryFromDxcc(324)).toEqual({ entity: "India", continent: "AS", ituZone: 41, cqZone: 22 });

  //Indonesia
  expect(dxcc.getCountryFromDxcc(327)).toEqual({ entity: "Indonesia", continent: "OC", ituZone: 51, cqZone: 28 });

  //Lebanon
  expect(dxcc.getCountryFromDxcc(354)).toEqual({ entity: "Lebanon", continent: "AS", ituZone: 39, cqZone: 20 });

  // Laos
  expect(dxcc.getCountryFromDxcc(143)).toEqual({ entity: "Laos", continent: "AS", ituZone: 49, cqZone: 26 });

  //Lakshadweep Is.
  expect(dxcc.getCountryFromDxcc(142)).toEqual({ entity: "Lakshadweep Is.", continent: "AS", ituZone: 41, cqZone: 22 });

  //Mauritius
  expect(dxcc.getCountryFromDxcc(165)).toEqual({ entity: "Mauritius", continent: "AF", ituZone: 53, cqZone: 39 });

  //Morocco
  expect(dxcc.getCountryFromDxcc(446)).toEqual({ entity: "Morocco", continent: "AF", ituZone: 37, cqZone: 33 });

  //Nigeria
  expect(dxcc.getCountryFromDxcc(450)).toEqual({ entity: "Nigeria", continent: "AF", ituZone: 46, cqZone: 35 });

  //Rodriguez I.
  expect(dxcc.getCountryFromDxcc(207)).toEqual({ entity: "Rodriguez I.", continent: "AF", ituZone: 53, cqZone: 39 });

  //Serbia
  expect(dxcc.getCountryFromDxcc(296)).toEqual({ entity: "Serbia", continent: "EU", ituZone: 28, cqZone: 15 });

  //Sri Lanka
  expect(dxcc.getCountryFromDxcc(315)).toEqual({ entity: "Sri Lanka", continent: "AS", ituZone: 41, cqZone: 22 });

  //Singapore
  expect(dxcc.getCountryFromDxcc(381)).toEqual({ entity: "Singapore", continent: "AS", ituZone: 54, cqZone: 28 });

  //Svalbard
  expect(dxcc.getCountryFromDxcc(259)).toEqual({ entity: "Svalbard", continent: "EU", ituZone: 18, cqZone: 40 });

  //Taiwan
  expect(dxcc.getCountryFromDxcc(386)).toEqual({ entity: "Taiwan", continent: "AS", ituZone: 44, cqZone: 24 });

  //Thailand
  expect(dxcc.getCountryFromDxcc(387)).toEqual({ entity: "Thailand", continent: "AS", ituZone: 49, cqZone: 26 });

  //USA
  expect(dxcc.getCountryFromDxcc(6)).toEqual({ entity: "Alaska", continent: "NA", ituZone: 1, cqZone: 1 });
  expect(dxcc.getCountryFromDxcc(291)).toEqual({ entity: "United States", continent: "NA", ituZone: 8, cqZone: 5 });
});

// New DXCC reverse lookup tests
test("New DXCC entities reverse lookup", async () => {
  // Africa
  expect(dxcc.getCountryFromDxcc(49)).toEqual({ entity: "Equatorial Guinea", continent: "AF", ituZone: 47, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(195)).toEqual({ entity: "Annobon I.", continent: "AF", ituZone: 52, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(468)).toEqual({ entity: "Swaziland", continent: "AF", ituZone: 57, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(474)).toEqual({ entity: "Tunisia", continent: "AF", ituZone: 37, cqZone: 33 });
  expect(dxcc.getCountryFromDxcc(107)).toEqual({ entity: "Guinea", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(436)).toEqual({ entity: "Libya", continent: "AF", ituZone: 38, cqZone: 34 });
  expect(dxcc.getCountryFromDxcc(470)).toEqual({ entity: "Tanzania", continent: "AF", ituZone: 53, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(444)).toEqual({ entity: "Mauritania", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(187)).toEqual({ entity: "Niger", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(286)).toEqual({ entity: "Uganda", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(430)).toEqual({ entity: "Kenya", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(456)).toEqual({ entity: "Senegal", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(432)).toEqual({ entity: "Lesotho", continent: "AF", ituZone: 57, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(440)).toEqual({ entity: "Malawi", continent: "AF", ituZone: 53, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(458)).toEqual({ entity: "Sierra Leone", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(482)).toEqual({ entity: "Zambia", continent: "AF", ituZone: 53, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(404)).toEqual({ entity: "Burundi", continent: "AF", ituZone: 52, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(454)).toEqual({ entity: "Rwanda", continent: "AF", ituZone: 52, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(402)).toEqual({ entity: "Botswana", continent: "AF", ituZone: 57, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(409)).toEqual({ entity: "Cape Verde", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(411)).toEqual({ entity: "Comoros", continent: "AF", ituZone: 53, cqZone: 39 });
  expect(dxcc.getCountryFromDxcc(51)).toEqual({ entity: "Eritrea", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(53)).toEqual({ entity: "Ethiopia", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(434)).toEqual({ entity: "Liberia", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(480)).toEqual({ entity: "Burkina Faso", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(442)).toEqual({ entity: "Mali", continent: "AF", ituZone: 46, cqZone: 35 });
  expect(dxcc.getCountryFromDxcc(466)).toEqual({ entity: "Sudan", continent: "AF", ituZone: 47, cqZone: 34 });
  expect(dxcc.getCountryFromDxcc(478)).toEqual({ entity: "Egypt", continent: "AF", ituZone: 38, cqZone: 34 });
  expect(dxcc.getCountryFromDxcc(232)).toEqual({ entity: "Somalia", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(382)).toEqual({ entity: "Djibouti", continent: "AF", ituZone: 48, cqZone: 37 });
  expect(dxcc.getCountryFromDxcc(302)).toEqual({ entity: "Western Sahara", continent: "AF", ituZone: 46, cqZone: 33 });
  expect(dxcc.getCountryFromDxcc(379)).toEqual({ entity: "Seychelles", continent: "AF", ituZone: 53, cqZone: 39 });
  expect(dxcc.getCountryFromDxcc(219)).toEqual({ entity: "Sao Tome & Principe", continent: "AF", ituZone: 47, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(464)).toEqual({ entity: "Namibia", continent: "AF", ituZone: 57, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(521)).toEqual({ entity: "South Sudan", continent: "AF", ituZone: 48, cqZone: 34 });
  expect(dxcc.getCountryFromDxcc(250)).toEqual({ entity: "St. Helena", continent: "AF", ituZone: 66, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(205)).toEqual({ entity: "Ascension I.", continent: "AF", ituZone: 66, cqZone: 36 });
  expect(dxcc.getCountryFromDxcc(274)).toEqual({ entity: "Tristan da Cunha", continent: "AF", ituZone: 66, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(201)).toEqual({ entity: "Prince Edward & Marion Is.", continent: "AF", ituZone: 57, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(181)).toEqual({ entity: "Mozambique", continent: "AF", ituZone: 53, cqZone: 37 });

  // Americas
  expect(dxcc.getCountryFromDxcc(82)).toEqual({ entity: "Jamaica", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(62)).toEqual({ entity: "Barbados", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(129)).toEqual({ entity: "Guyana", continent: "SA", ituZone: 12, cqZone: 9 });
  expect(dxcc.getCountryFromDxcc(90)).toEqual({ entity: "Trinidad & Tobago", continent: "SA", ituZone: 11, cqZone: 9 });
  expect(dxcc.getCountryFromDxcc(60)).toEqual({ entity: "Bahamas", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(112)).toEqual({ entity: "Chile", continent: "SA", ituZone: 14, cqZone: 12 });
  expect(dxcc.getCountryFromDxcc(47)).toEqual({ entity: "Easter I.", continent: "SA", ituZone: 63, cqZone: 12 });
  expect(dxcc.getCountryFromDxcc(70)).toEqual({ entity: "Cuba", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(104)).toEqual({ entity: "Bolivia", continent: "SA", ituZone: 12, cqZone: 10 });
  expect(dxcc.getCountryFromDxcc(144)).toEqual({ entity: "Uruguay", continent: "SA", ituZone: 14, cqZone: 13 });
  expect(dxcc.getCountryFromDxcc(120)).toEqual({ entity: "Ecuador", continent: "SA", ituZone: 12, cqZone: 10 });
  expect(dxcc.getCountryFromDxcc(71)).toEqual({ entity: "Galapagos Is.", continent: "SA", ituZone: 12, cqZone: 10 });
  expect(dxcc.getCountryFromDxcc(78)).toEqual({ entity: "Haiti", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(72)).toEqual({ entity: "Dominican Republic", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(116)).toEqual({ entity: "Colombia", continent: "SA", ituZone: 12, cqZone: 9 });
  expect(dxcc.getCountryFromDxcc(88)).toEqual({ entity: "Panama", continent: "NA", ituZone: 11, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(80)).toEqual({ entity: "Honduras", continent: "NA", ituZone: 11, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(76)).toEqual({ entity: "Guatemala", continent: "NA", ituZone: 12, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(308)).toEqual({ entity: "Costa Rica", continent: "NA", ituZone: 11, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(86)).toEqual({ entity: "Nicaragua", continent: "NA", ituZone: 11, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(74)).toEqual({ entity: "El Salvador", continent: "NA", ituZone: 11, cqZone: 7 });
  expect(dxcc.getCountryFromDxcc(100)).toEqual({ entity: "Argentina", continent: "SA", ituZone: 14, cqZone: 13 });
  expect(dxcc.getCountryFromDxcc(136)).toEqual({ entity: "Peru", continent: "SA", ituZone: 12, cqZone: 10 });
  expect(dxcc.getCountryFromDxcc(148)).toEqual({ entity: "Venezuela", continent: "SA", ituZone: 12, cqZone: 9 });
  expect(dxcc.getCountryFromDxcc(50)).toEqual({ entity: "Mexico", continent: "NA", ituZone: 10, cqZone: 6 });
  expect(dxcc.getCountryFromDxcc(202)).toEqual({ entity: "Puerto Rico", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(285)).toEqual({ entity: "Virgin Is.", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(64)).toEqual({ entity: "Bermuda", continent: "NA", ituZone: 11, cqZone: 5 });
  expect(dxcc.getCountryFromDxcc(69)).toEqual({ entity: "Cayman Is.", continent: "NA", ituZone: 11, cqZone: 8 });
  expect(dxcc.getCountryFromDxcc(13)).toEqual({ entity: "Antarctica", continent: "AN", ituZone: 72, cqZone: 13 });

  // Asia
  expect(dxcc.getCountryFromDxcc(293)).toEqual({ entity: "Viet Nam", continent: "AS", ituZone: 49, cqZone: 26 });
  expect(dxcc.getCountryFromDxcc(18)).toEqual({ entity: "Azerbaijan", continent: "AS", ituZone: 29, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(75)).toEqual({ entity: "Georgia", continent: "AS", ituZone: 29, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(511)).toEqual({ entity: "Timor-Leste", continent: "OC", ituZone: 54, cqZone: 28 });
  expect(dxcc.getCountryFromDxcc(215)).toEqual({ entity: "Cyprus", continent: "AS", ituZone: 39, cqZone: 20 });
  expect(dxcc.getCountryFromDxcc(492)).toEqual({ entity: "Yemen", continent: "AS", ituZone: 39, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(159)).toEqual({ entity: "Maldives", continent: "AS", ituZone: 41, cqZone: 22 });
  expect(dxcc.getCountryFromDxcc(369)).toEqual({ entity: "Nepal", continent: "AS", ituZone: 42, cqZone: 22 });
  expect(dxcc.getCountryFromDxcc(306)).toEqual({ entity: "Bhutan", continent: "AS", ituZone: 41, cqZone: 22 });
  expect(dxcc.getCountryFromDxcc(330)).toEqual({ entity: "Iran", continent: "AS", ituZone: 40, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(135)).toEqual({ entity: "Kyrgyzstan", continent: "AS", ituZone: 30, cqZone: 17 });
  expect(dxcc.getCountryFromDxcc(262)).toEqual({ entity: "Tajikistan", continent: "AS", ituZone: 30, cqZone: 17 });
  expect(dxcc.getCountryFromDxcc(280)).toEqual({ entity: "Turkmenistan", continent: "AS", ituZone: 30, cqZone: 17 });
  expect(dxcc.getCountryFromDxcc(378)).toEqual({ entity: "Saudi Arabia", continent: "AS", ituZone: 39, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(137)).toEqual({ entity: "Republic of Korea", continent: "AS", ituZone: 44, cqZone: 25 });
  expect(dxcc.getCountryFromDxcc(339)).toEqual({ entity: "Japan", continent: "AS", ituZone: 45, cqZone: 25 });
  expect(dxcc.getCountryFromDxcc(363)).toEqual({ entity: "Mongolia", continent: "AS", ituZone: 32, cqZone: 23 });
  expect(dxcc.getCountryFromDxcc(342)).toEqual({ entity: "Jordan", continent: "AS", ituZone: 39, cqZone: 20 });
  expect(dxcc.getCountryFromDxcc(333)).toEqual({ entity: "Iraq", continent: "AS", ituZone: 39, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(292)).toEqual({ entity: "Uzbekistan", continent: "AS", ituZone: 30, cqZone: 17 });
  expect(dxcc.getCountryFromDxcc(312)).toEqual({ entity: "Cambodia", continent: "AS", ituZone: 49, cqZone: 26 });
  expect(dxcc.getCountryFromDxcc(309)).toEqual({ entity: "Myanmar", continent: "AS", ituZone: 49, cqZone: 26 });
  expect(dxcc.getCountryFromDxcc(152)).toEqual({ entity: "Macao", continent: "AS", ituZone: 44, cqZone: 24 });
  expect(dxcc.getCountryFromDxcc(321)).toEqual({ entity: "Hong Kong", continent: "AS", ituZone: 44, cqZone: 24 });
  expect(dxcc.getCountryFromDxcc(3)).toEqual({ entity: "Afghanistan", continent: "AS", ituZone: 40, cqZone: 21 });
  expect(dxcc.getCountryFromDxcc(510)).toEqual({ entity: "Palestine", continent: "AS", ituZone: 39, cqZone: 20 });
  expect(dxcc.getCountryFromDxcc(305)).toEqual({ entity: "Bangladesh", continent: "AS", ituZone: 41, cqZone: 22 });

  // Europe
  expect(dxcc.getCountryFromDxcc(260)).toEqual({ entity: "Monaco", continent: "EU", ituZone: 27, cqZone: 14 });
  expect(dxcc.getCountryFromDxcc(246)).toEqual({ entity: "Sovereign Military Order of Malta", continent: "EU", ituZone: 28, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(117)).toEqual({ entity: "ITU HQ", continent: "EU", ituZone: 28, cqZone: 14 });
  expect(dxcc.getCountryFromDxcc(179)).toEqual({ entity: "Moldova", continent: "EU", ituZone: 29, cqZone: 16 });
  expect(dxcc.getCountryFromDxcc(251)).toEqual({ entity: "Liechtenstein", continent: "EU", ituZone: 28, cqZone: 14 });
  expect(dxcc.getCountryFromDxcc(278)).toEqual({ entity: "San Marino", continent: "EU", ituZone: 28, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(7)).toEqual({ entity: "Albania", continent: "EU", ituZone: 28, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(233)).toEqual({ entity: "Gibraltar", continent: "EU", ituZone: 37, cqZone: 14 });
  expect(dxcc.getCountryFromDxcc(5)).toEqual({ entity: "Aland Is.", continent: "EU", ituZone: 18, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(167)).toEqual({ entity: "Market Reef", continent: "EU", ituZone: 18, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(118)).toEqual({ entity: "Jan Mayen", continent: "EU", ituZone: 18, cqZone: 40 });
  expect(dxcc.getCountryFromDxcc(126)).toEqual({ entity: "Kaliningrad", continent: "EU", ituZone: 29, cqZone: 15 });
  expect(dxcc.getCountryFromDxcc(61)).toEqual({ entity: "Franz Josef Land", continent: "EU", ituZone: 75, cqZone: 40 });

  // Oceania
  expect(dxcc.getCountryFromDxcc(176)).toEqual({ entity: "Fiji", continent: "OC", ituZone: 56, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(160)).toEqual({ entity: "Tonga", continent: "OC", ituZone: 62, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(157)).toEqual({ entity: "Nauru", continent: "OC", ituZone: 65, cqZone: 31 });
  expect(dxcc.getCountryFromDxcc(46)).toEqual({ entity: "East Malaysia", continent: "OC", ituZone: 54, cqZone: 28 });
  expect(dxcc.getCountryFromDxcc(375)).toEqual({ entity: "Philippines", continent: "OC", ituZone: 50, cqZone: 27 });
  expect(dxcc.getCountryFromDxcc(190)).toEqual({ entity: "Samoa", continent: "OC", ituZone: 62, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(163)).toEqual({ entity: "Papua New Guinea", continent: "OC", ituZone: 51, cqZone: 28 });
  expect(dxcc.getCountryFromDxcc(185)).toEqual({ entity: "Solomon Is.", continent: "OC", ituZone: 51, cqZone: 28 });
  expect(dxcc.getCountryFromDxcc(158)).toEqual({ entity: "Vanuatu", continent: "OC", ituZone: 56, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(162)).toEqual({ entity: "New Caledonia", continent: "OC", ituZone: 56, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(175)).toEqual({ entity: "French Polynesia", continent: "OC", ituZone: 63, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(298)).toEqual({ entity: "Wallis & Futuna", continent: "OC", ituZone: 62, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(22)).toEqual({ entity: "Palau", continent: "OC", ituZone: 64, cqZone: 27 });
  expect(dxcc.getCountryFromDxcc(282)).toEqual({ entity: "Tuvalu", continent: "OC", ituZone: 65, cqZone: 31 });
  expect(dxcc.getCountryFromDxcc(301)).toEqual({ entity: "W. Kiribati", continent: "OC", ituZone: 65, cqZone: 31 });
  expect(dxcc.getCountryFromDxcc(173)).toEqual({ entity: "Micronesia", continent: "OC", ituZone: 65, cqZone: 27 });
  expect(dxcc.getCountryFromDxcc(168)).toEqual({ entity: "Marshall Is.", continent: "OC", ituZone: 65, cqZone: 31 });
  expect(dxcc.getCountryFromDxcc(345)).toEqual({ entity: "Brunei", continent: "OC", ituZone: 54, cqZone: 28 });
  expect(dxcc.getCountryFromDxcc(170)).toEqual({ entity: "New Zealand", continent: "OC", ituZone: 60, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(34)).toEqual({ entity: "Chatham Is.", continent: "OC", ituZone: 60, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(133)).toEqual({ entity: "Kermadec Is.", continent: "OC", ituZone: 60, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(189)).toEqual({ entity: "Norfolk I.", continent: "OC", ituZone: 60, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(35)).toEqual({ entity: "Christmas I.", continent: "OC", ituZone: 54, cqZone: 29 });
  expect(dxcc.getCountryFromDxcc(38)).toEqual({ entity: "Cocos (Keeling) Is.", continent: "OC", ituZone: 54, cqZone: 29 });
  expect(dxcc.getCountryFromDxcc(147)).toEqual({ entity: "Lord Howe I.", continent: "OC", ituZone: 60, cqZone: 30 });
  expect(dxcc.getCountryFromDxcc(172)).toEqual({ entity: "Pitcairn I.", continent: "OC", ituZone: 63, cqZone: 32 });
  expect(dxcc.getCountryFromDxcc(270)).toEqual({ entity: "Tokelau Is.", continent: "OC", ituZone: 62, cqZone: 31 });

  // Other
  expect(dxcc.getCountryFromDxcc(24)).toEqual({ entity: "Bouvet I.", continent: "AF", ituZone: 67, cqZone: 38 });
  expect(dxcc.getCountryFromDxcc(199)).toEqual({ entity: "Peter 1 I.", continent: "AN", ituZone: 72, cqZone: 12 });
});
