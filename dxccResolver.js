// Author: Henrique B. Gravina
// This code is base on 2013_Current_Deleted.txt from ARRL and other sites in the WWW
// 2023/02/15

class DxccEntity {
  constructor(prefix, entity, dxcc, continent, ituZone, cqZone) {
    this.prefix = prefix;
    this.entity = entity;
    this.dxcc = dxcc;
    this.continent = continent;
    this.ituZone = ituZone;
    this.cqZone = cqZone;
  }
}

class DxccEntities {
  constructor() {
    this.dxccEntities = [
      // === Special ===
      //Sovereign Military Order of Malta
      new DxccEntity(/^1A/, "Sovereign Military Order of Malta", 246, "EU", 28, 15),

      // === 3-prefix ===
      //Monaco
      new DxccEntity(/^3A/, "Monaco", 260, "EU", 27, 14),

      //Agalega & St. Brandon Is.
      new DxccEntity(/^3B[67]/, "Agalega & St. Brandon Is.", 4, "AF", 53, 39),

      //Mauritius
      new DxccEntity(/^3B[8]/, "Mauritius", 165, "AF", 53, 39),

      //Rodriguez I.
      new DxccEntity(/^3B[9]/, "Rodriguez I.", 207, "AF", 53, 39),

      //Annobon I. (must be before Equatorial Guinea 3C)
      new DxccEntity(/^3C0/, "Annobon I.", 195, "AF", 52, 36),

      //Equatorial Guinea
      new DxccEntity(/^3C/, "Equatorial Guinea", 49, "AF", 47, 36),

      //Fiji
      new DxccEntity(/^3D2/, "Fiji", 176, "OC", 56, 32),

      //Swaziland
      new DxccEntity(/^3DA/, "Swaziland", 468, "AF", 57, 38),

      //Tunisia
      new DxccEntity(/^3V/, "Tunisia", 474, "AF", 37, 33),

      //Viet Nam
      new DxccEntity(/^3W/, "Viet Nam", 293, "AS", 49, 26),

      //Guinea
      new DxccEntity(/^3X/, "Guinea", 107, "AF", 46, 35),

      //Bouvet I.
      new DxccEntity(/^3Y0[BG]/, "Bouvet I.", 24, "AF", 67, 38),

      //Peter 1 I.
      new DxccEntity(/^3Y0[PX]/, "Peter 1 I.", 199, "AN", 72, 12),

      //Bouvet I. (fallback for 3Y)
      new DxccEntity(/^3Y/, "Bouvet I.", 24, "AF", 67, 38),

      //Poland
      new DxccEntity(/^3Z[0-9]/, "Poland", 269, "EU", 28, 15),

      // === 4-prefix ===
      //Azerbaijan
      new DxccEntity(/^4[JK]/, "Azerbaijan", 18, "AS", 29, 21),

      //Georgia
      new DxccEntity(/^4L/, "Georgia", 75, "AS", 29, 21),

      //Montenegro
      new DxccEntity(/^4O[4-7]/, "Montenegro", 514, "EU", 28, 15),

      //Sri Lanka
      new DxccEntity(/^4S/, "Sri Lanka", 315, "AS", 41, 22),

      //ITU HQ
      new DxccEntity(/^4U[0-9]ITU/, "ITU HQ", 117, "EU", 28, 14),

      //United Nations HQ
      new DxccEntity(/^4U[0-9]UN/, "United Nations HQ", 289, "NA", 8, 5),

      //Austria (special call)
      new DxccEntity(/^4U100QO/, "Austria", 206, "EU", 28, 15),

      //Timor-Leste
      new DxccEntity(/^4W/, "Timor-Leste", 511, "OC", 54, 28),

      //Israel
      new DxccEntity(/^4[XZ][123567890]/, "Israel", 336, "AS", 39, 20),

      // === 5-prefix ===
      //Libya
      new DxccEntity(/^5A/, "Libya", 436, "AF", 38, 34),

      //Cyprus
      new DxccEntity(/^5B/, "Cyprus", 215, "AS", 39, 20),

      //Tanzania
      new DxccEntity(/^5[HI]/, "Tanzania", 470, "AF", 53, 37),

      //Nigeria
      new DxccEntity(/^5N/, "Nigeria", 450, "AF", 46, 35),

      //Denmark
      new DxccEntity(/^(5[PQ]|5P[A-Z])/, "Denmark", 221, "EU", 18, 14),

      //Madagascar
      new DxccEntity(/^5[R-S][A-Z]/, "Madagascar", 438, "AF", 53, 39),
      new DxccEntity(/^5[R-S]/, "Madagascar", 438, "AF", 53, 39),

      //Mauritania
      new DxccEntity(/^5T/, "Mauritania", 444, "AF", 46, 35),

      //Niger
      new DxccEntity(/^5U/, "Niger", 187, "AF", 46, 35),

      //Togo
      new DxccEntity(/^5V/, "Togo", 483, "AF", 46, 35),

      //Samoa
      new DxccEntity(/^5W/, "Samoa", 190, "OC", 62, 32),

      //Uganda
      new DxccEntity(/^5X/, "Uganda", 286, "AF", 48, 37),

      //Kenya
      new DxccEntity(/^5[YZ]/, "Kenya", 430, "AF", 48, 37),

      // === 6-prefix ===
      //Somalia
      new DxccEntity(/^6O/, "Somalia", 232, "AF", 48, 37),

      //Senegal
      new DxccEntity(/^6[VW]/, "Senegal", 456, "AF", 46, 35),

      //Jamaica
      new DxccEntity(/^6Y/, "Jamaica", 82, "NA", 11, 8),

      // === 7-prefix ===
      //Yemen
      new DxccEntity(/^7O/, "Yemen", 492, "AS", 39, 21),

      //Lesotho
      new DxccEntity(/^7P/, "Lesotho", 432, "AF", 57, 38),

      //Malawi
      new DxccEntity(/^7Q/, "Malawi", 440, "AF", 53, 37),

      //Sweden
      new DxccEntity(/^7S/, "Sweden", 284, "EU", 18, 14),

      //Algeria
      new DxccEntity(/^7[T-Y]/, "Algeria", 400, "AF", 37, 33),

      // === 8-prefix ===
      //Indonesia
      new DxccEntity(/^8[A-I]/, "Indonesia", 327, "OC", 51, 28),

      //Barbados
      new DxccEntity(/^8P/, "Barbados", 62, "NA", 11, 8),

      //Maldives
      new DxccEntity(/^8Q/, "Maldives", 159, "AS", 41, 22),

      //Guyana
      new DxccEntity(/^8R/, "Guyana", 129, "SA", 12, 9),

      //Sweden
      new DxccEntity(/^8S/, "Sweden", 284, "EU", 18, 14),

      // === 9-prefix ===
      //Croatia
      new DxccEntity(/^9A/, "Croatia", 497, "EU", 28, 15),

      //Ghana
      new DxccEntity(/^9G/, "Ghana", 424, "AF", 46, 35),

      //Malta
      new DxccEntity(/^9H/, "Malta", 257, "EU", 28, 15),

      //Zambia
      new DxccEntity(/^9[IJ]/, "Zambia", 482, "AF", 53, 36),

      //Kuwait
      new DxccEntity(/^9K[012356789]/, "Kuwait", 348, "AS", 39, 21),

      //Sierra Leone
      new DxccEntity(/^9L/, "Sierra Leone", 458, "AF", 46, 35),

      //East Malaysia (must be before West Malaysia)
      new DxccEntity(/^9M[68]/, "East Malaysia", 46, "OC", 54, 28),

      //West Malaysia
      new DxccEntity(/^9M[A-Z]/, "West Malaysia", 299, "AS", 54, 28),
      new DxccEntity(/^9M[2-4]/, "West Malaysia", 299, "AS", 54, 28),

      //Nepal
      new DxccEntity(/^9N/, "Nepal", 369, "AS", 42, 22),

      //Burundi
      new DxccEntity(/^9U/, "Burundi", 404, "AF", 52, 36),

      //Singapore
      new DxccEntity(/^9V/, "Singapore", 381, "AS", 54, 28),

      //Rwanda
      new DxccEntity(/^9X/, "Rwanda", 454, "AF", 52, 36),

      //Trinidad & Tobago
      new DxccEntity(/^9[YZ]/, "Trinidad & Tobago", 90, "SA", 11, 9),

      // === A-prefix ===
      //Botswana
      new DxccEntity(/^A2/, "Botswana", 402, "AF", 57, 38),

      //Tonga
      new DxccEntity(/^A3/, "Tonga", 160, "OC", 62, 32),

      //Oman
      new DxccEntity(/^A4/, "Oman", 370, "AS", 39, 21),

      //Bhutan
      new DxccEntity(/^A5/, "Bhutan", 306, "AS", 41, 22),

      //United Arab Emirates
      new DxccEntity(/^A6/, "United Arab Emirates", 391, "AS", 39, 21),

      //Qatar
      new DxccEntity(/^A7/, "Qatar", 376, "AS", 39, 21),

      //Bahrain
      new DxccEntity(/^A9/, "Bahrain", 304, "AS", 39, 21),

      //Spain
      new DxccEntity(/^A[MNO]/, "Spain", 281, "EU", 37, 14),

      //USA
      new DxccEntity(/^A[A-K]/, "United States", 291, "NA", 8, 5),

      // === B-prefix ===
      //Scarborough Reef
      new DxccEntity(/^BS7/, "Scarborough Reef", 506, "AS", 50, 27),

      //Taiwan
      new DxccEntity(/^B[U-X]/, "Taiwan", 386, "AS", 44, 24),

      //China
      new DxccEntity(/^BA/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BG/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BH/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BI/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BT/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BD/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^BY/, "China", 318, "AS", 44, 24),
      new DxccEntity(/^B[0-9]/, "China", 318, "AS", 44, 24),

      // === C-prefix ===
      //Nauru
      new DxccEntity(/^C2/, "Nauru", 157, "OC", 65, 31),

      //Andorra
      new DxccEntity(/^C3/, "Andorra", 203, "EU", 27, 14),

      //Cyprus
      new DxccEntity(/^C4/, "Cyprus", 215, "AS", 39, 20),

      //The Gambia
      new DxccEntity(/^C5[A-Z]/, "The Gambia", 422, "AF", 46, 35),

      //Bahamas
      new DxccEntity(/^C6/, "Bahamas", 60, "NA", 11, 8),

      //Mozambique
      new DxccEntity(/^C[89]/, "Mozambique", 181, "AF", 53, 37),

      //Easter I. (must be before Chile)
      new DxccEntity(/^CE0/, "Easter I.", 47, "SA", 63, 12),

      //Antarctica
      new DxccEntity(/^CE9/, "Antarctica", 13, "AN", 72, 13),

      //Chile
      new DxccEntity(/^C[A-E]/, "Chile", 112, "SA", 14, 12),

      //Morocco
      new DxccEntity(/^CN[0-9]/, "Morocco", 446, "AF", 37, 33),

      //Cuba
      new DxccEntity(/^C[MO]/, "Cuba", 70, "NA", 11, 8),

      //Bolivia
      new DxccEntity(/^CP/, "Bolivia", 104, "SA", 12, 10),

      //Portugal
      new DxccEntity(/^CR[5]/, "Portugal", 272, "EU", 37, 14),
      new DxccEntity(/^CS[5]/, "Portugal", 272, "EU", 37, 14),
      new DxccEntity(/^CS2/, "Portugal", 272, "EU", 37, 14),
      new DxccEntity(/^CT3/, "Madeira Is.", 256, "AF", 36, 33),
      new DxccEntity(/^CT[124567890]/, "Portugal", 272, "EU", 37, 14),
      new DxccEntity(/^CU/, "Azores", 149, "EU", 36, 14),

      //Uruguay
      new DxccEntity(/^C[V-X]/, "Uruguay", 144, "SA", 14, 13),

      // === D-prefix ===
      //Angola
      new DxccEntity(/^D[23]/, "Angola", 401, "AF", 52, 36),

      //Cape Verde
      new DxccEntity(/^D4/, "Cape Verde", 409, "AF", 46, 35),

      //Comoros
      new DxccEntity(/^D6/, "Comoros", 411, "AF", 53, 39),

      //Germany
      new DxccEntity(/^D[A-R]/, "Germany", 230, "EU", 28, 14),

      //Philippines
      new DxccEntity(/^D[U-Z]/, "Philippines", 375, "OC", 50, 27),

      // === E-prefix ===
      //Thailand
      new DxccEntity(/^E2/, "Thailand", 387, "AS", 49, 26),

      //Eritrea
      new DxccEntity(/^E3/, "Eritrea", 51, "AF", 48, 37),

      //Palestine
      new DxccEntity(/^E4/, "Palestine", 510, "AS", 39, 20),

      //Bosnia-Herzegovina
      new DxccEntity(/^E7/, "Bosnia-Herzegovina", 501, "EU", 28, 15),

      //Ireland
      new DxccEntity(/^EI/, "Ireland", 245, "EU", 27, 14),
      new DxccEntity(/^EJ/, "Ireland", 245, "EU", 27, 14),

      //Armenia
      new DxccEntity(/^EK/, "Armenia", 14, "AS", 29, 21),

      //Liberia
      new DxccEntity(/^EL/, "Liberia", 434, "AF", 46, 35),

      //Iran
      new DxccEntity(/^E[PQ]/, "Iran", 330, "AS", 40, 21),

      //Moldova
      new DxccEntity(/^ER/, "Moldova", 179, "EU", 29, 16),

      //Estonia
      new DxccEntity(/^ES/, "Estonia", 52, "EU", 29, 15),

      //Ethiopia
      new DxccEntity(/^ET/, "Ethiopia", 53, "AF", 48, 37),

      //Belarus
      new DxccEntity(/^E[U-W]/, "Belarus", 27, "EU", 29, 16),

      //Kyrgyzstan
      new DxccEntity(/^EX/, "Kyrgyzstan", 135, "AS", 30, 17),

      //Tajikistan
      new DxccEntity(/^EY/, "Tajikistan", 262, "AS", 30, 17),

      //Turkmenistan
      new DxccEntity(/^EZ/, "Turkmenistan", 280, "AS", 30, 17),

      //Spain
      new DxccEntity(/^E[A-H][0-57]/, "Spain", 281, "EU", 37, 14),
      new DxccEntity(/^E[A-H]6/, "Balearic Is.", 21, "EU", 37, 14),
      new DxccEntity(/^E[A-H]8/, "Canary Is.", 29, "AF", 36, 33),
      new DxccEntity(/^E[A-H]9/, "Ceuta & Melilla", 32, "AF", 37, 33),

      //Ukraine
      new DxccEntity(/^((U[R-Z])|(E[M-O]))[0-9]/, "Ukraine", 288, "EU", 29, 16),

      // === F-prefix ===
      //Guadeloupe
      new DxccEntity(/^FG/, "Guadeloupe", 79, "NA", 11, 8),

      //Saint Barthelemy
      new DxccEntity(/^FJ/, "Saint Barthelemy", 516, "NA", 11, 8),

      //New Caledonia
      new DxccEntity(/^FK/, "New Caledonia", 162, "OC", 56, 32),

      //Martinique
      new DxccEntity(/^FM/, "Martinique", 84, "NA", 11, 8),

      //French Polynesia
      new DxccEntity(/^FO/, "French Polynesia", 175, "OC", 63, 32),

      //St. Pierre & Miquelon
      new DxccEntity(/^FP/, "St. Pierre & Miquelon", 277, "NA", 9, 5),

      //Reunion I.
      new DxccEntity(/^FR[0-9]/, "Reunion I.", 453, "AF", 53, 39),

      //Saint Martin
      new DxccEntity(/^FS/, "Saint Martin", 213, "NA", 11, 8),

      //Wallis & Futuna
      new DxccEntity(/^FW/, "Wallis & Futuna", 298, "OC", 62, 32),

      //French Guiana
      new DxccEntity(/^FY/, "French Guiana", 63, "SA", 12, 9),

      //France
      new DxccEntity(/^F[0-9]/, "France", 227, "EU", 27, 14),
      new DxccEntity(/^TM[0-9]/, "France", 227, "EU", 27, 14),

      // === G-prefix (UK) ===
      //England
      new DxccEntity(/^G[0-9]/, "England", 223, "EU", 27, 14),
      new DxccEntity(/^G[E][0-9]/, "England", 223, "EU", 27, 14),
      new DxccEntity(/^M[A-Z,0-9]/, "England", 223, "EU", 27, 14),
      new DxccEntity(
        /^(?!(GD|GE|GT|GI|GN|GJ|GH|GM|GS|GU|GP|GW|GC))(G\d|GX\d|G[BM-Z]\d)/,
        "England",
        223,
        "EU", 27, 14
      ),
      new DxccEntity(/^2E/, "England", 223, "EU", 27, 14),

      new DxccEntity(/^(GD|GT)[A-Z\d]*/, "Isle of Man", 114, "EU", 27, 14),
      new DxccEntity(/^2D/, "Isle of Man", 114, "EU", 27, 14),

      new DxccEntity(/^(GI|GN)[A-Z\d]*/, "Northern Ireland", 265, "EU", 27, 14),
      new DxccEntity(/^2I/, "Northern Ireland", 265, "EU", 27, 14),

      new DxccEntity(/^(GJ|GH)[A-Z\d]*/, "Jersey", 122, "EU", 27, 14),
      new DxccEntity(/^2J/, "Jersey", 122, "EU", 27, 14),

      new DxccEntity(/^(GM|GS)[A-Z\d]*/, "Scotland", 279, "EU", 27, 14),
      new DxccEntity(/^2M/, "Scotland", 279, "EU", 27, 14),

      new DxccEntity(/^(GU|GP)[A-Z\d]*/, "Guernsey", 106, "EU", 27, 14),
      new DxccEntity(/^2U*/, "Guernsey", 106, "EU", 27, 14),

      new DxccEntity(/^(GW|GC)[A-Z\d]*/, "Wales", 294, "EU", 27, 14),
      new DxccEntity(/^2W*/, "Wales", 294, "EU", 27, 14),

      // === H-prefix ===
      //Solomon Is.
      new DxccEntity(/^H4/, "Solomon Is.", 185, "OC", 51, 28),

      //Hungary
      new DxccEntity(/^(HA|HG)[0-9]/, "Hungary", 239, "EU", 28, 15),

      //Liechtenstein (must be before Switzerland HB[0-9])
      new DxccEntity(/^HB0/, "Liechtenstein", 251, "EU", 28, 14),

      //Switzerland
      new DxccEntity(/^HB[0-9]/, "Switzerland", 287, "EU", 28, 14),

      //Galapagos Is. (must be before Ecuador)
      new DxccEntity(/^(HC8|HD8)/, "Galapagos Is.", 71, "SA", 12, 10),

      //Ecuador
      new DxccEntity(/^H[CD]/, "Ecuador", 120, "SA", 12, 10),

      //Haiti
      new DxccEntity(/^HH/, "Haiti", 78, "NA", 11, 8),

      //Dominican Republic
      new DxccEntity(/^HI/, "Dominican Republic", 72, "NA", 11, 8),

      //Colombia
      new DxccEntity(/^H[JK]/, "Colombia", 116, "SA", 12, 9),

      //Republic of Korea
      new DxccEntity(/^HL/, "Republic of Korea", 137, "AS", 44, 25),

      //Panama
      new DxccEntity(/^H[OP]/, "Panama", 88, "NA", 11, 7),

      //Honduras
      new DxccEntity(/^H[QR]/, "Honduras", 80, "NA", 11, 7),

      //Thailand
      new DxccEntity(/^HS/, "Thailand", 387, "AS", 49, 26),

      //El Salvador
      new DxccEntity(/^HU/, "El Salvador", 74, "NA", 11, 7),

      //Vatican
      new DxccEntity(/^HV/, "Vatican", 295, "EU", 28, 15),

      //Saudi Arabia
      new DxccEntity(/^HZ/, "Saudi Arabia", 378, "AS", 39, 21),

      // === I-prefix ===
      //Sardinia
      new DxccEntity(/^I[SM]0/, "Sardinia", 225, "EU", 28, 15),

      //Italy
      new DxccEntity(/^(?!I[SM]0)(I[A-Z]|I)[0-9]/, "Italy", 248, "EU", 28, 15),

      // === J-prefix ===
      //Djibouti
      new DxccEntity(/^J2/, "Djibouti", 382, "AF", 48, 37),

      //Dodecanese
      new DxccEntity(/^(SV5|J45)/, "Dodecanese", 45, "EU", 28, 20),

      //Crete
      new DxccEntity(/^(SV9|J49)/, "Crete", 40, "EU", 28, 20),

      //Greece
      new DxccEntity(/^(?!(SV5|J45|SV9|J49))(S[VZ]|J4)/, "Greece", 236, "EU", 28, 20),

      //Japan
      new DxccEntity(/^J[A-S]/, "Japan", 339, "AS", 45, 25),

      //Mongolia
      new DxccEntity(/^J[T-V]/, "Mongolia", 363, "AS", 32, 23),

      //Svalbard
      new DxccEntity(/^JW/, "Svalbard", 259, "EU", 18, 40),

      //Jan Mayen
      new DxccEntity(/^JX/, "Jan Mayen", 118, "EU", 18, 40),

      //Jordan
      new DxccEntity(/^JY/, "Jordan", 342, "AS", 39, 20),

      // === K-prefix ===
      //Antarctica (KC4 before general K)
      new DxccEntity(/^KC4/, "Antarctica", 13, "AN", 72, 13),

      //Guam
      new DxccEntity(/^KH2/, "Guam", 103, "OC", 64, 27),

      //Hawaii
      new DxccEntity(/^KH[67]/, "Hawaii", 110, "OC", 61, 31),

      //American Samoa
      new DxccEntity(/^KH8/, "American Samoa", 9, "OC", 62, 32),

      //Virgin Is.
      new DxccEntity(/^KP2/, "Virgin Is.", 285, "NA", 11, 8),

      //Puerto Rico
      new DxccEntity(/^KP[34]/, "Puerto Rico", 202, "NA", 11, 8),

      //Alaska
      new DxccEntity(/^(KL|AL|NL|WL)\d*[A-Z]*/, "Alaska", 6, "NA", 1, 1),

      //USA
      new DxccEntity(/^[KWN]/, "United States", 291, "NA", 8, 5),

      // === L-prefix ===
      //Norway
      new DxccEntity(/^L[A-N]/, "Norway", 266, "EU", 18, 14),

      //Argentina
      new DxccEntity(/^L[O-W]/, "Argentina", 100, "SA", 14, 13),

      //Luxembourg
      new DxccEntity(/^LX[0-9]/, "Luxembourg", 254, "EU", 27, 14),

      //Lithuania
      new DxccEntity(/^LY[0-9]/, "Lithuania", 146, "EU", 29, 15),

      //Bulgaria
      new DxccEntity(/^LZ[0-9]/, "Bulgaria", 212, "EU", 28, 20),

      // === O-prefix ===
      //Peru
      new DxccEntity(/^O[A-C]/, "Peru", 136, "SA", 12, 10),

      //Lebanon
      new DxccEntity(/^OD/, "Lebanon", 354, "AS", 39, 20),

      //Austria
      new DxccEntity(/^OE[0-9]/, "Austria", 206, "EU", 28, 15),

      //Aland Is. (must be before Finland)
      new DxccEntity(/^OH0/, "Aland Is.", 5, "EU", 18, 15),

      //Market Reef (must be before Finland)
      new DxccEntity(/^OJ0/, "Market Reef", 167, "EU", 18, 15),

      //Finland
      new DxccEntity(/^O[F-I]/, "Finland", 224, "EU", 18, 15),

      //Czech Republic
      new DxccEntity(/^(O[K-L][0-9])/, "Czech Republic", 503, "EU", 28, 15),

      //Slovak Republic
      new DxccEntity(/^OM[0-9]/, "Slovak Republic", 504, "EU", 28, 15),

      //Belgium
      new DxccEntity(/^(O[N-T])/, "Belgium", 209, "EU", 27, 14),

      //Denmark
      new DxccEntity(/^(O[U-W]|OZ)/, "Denmark", 221, "EU", 18, 14),

      //Greenland
      new DxccEntity(/^OX/, "Greenland", 237, "NA", 5, 40),

      //Faroe Is.
      new DxccEntity(/^OY/, "Faroe Is.", 222, "EU", 18, 14),

      // === P-prefix ===
      //Papua New Guinea
      new DxccEntity(/^P2/, "Papua New Guinea", 163, "OC", 51, 28),

      //Cyprus
      new DxccEntity(/^P3/, "Cyprus", 215, "AS", 39, 20),

      //Aruba
      new DxccEntity(/^P4/, "Aruba", 91, "SA", 11, 9),

      //Dem. People's Rep. of Korea
      new DxccEntity(/^P5/, "Dem. People's Rep. of Korea", 344, "AS", 44, 25),

      //Curacao
      new DxccEntity(/^PJ2/, "Curacao", 517, "SA", 11, 9),

      //Bonaire
      new DxccEntity(/^PJ4/, "Bonaire", 520, "SA", 11, 9),

      //Saba & St. Eustatius
      new DxccEntity(/^PJ[56]/, "Saba & St. Eustatius", 519, "NA", 11, 8),

      //St Maarten
      new DxccEntity(/^PJ7/, "St Maarten", 518, "NA", 11, 8),

      //Brazil (specific patterns before general)
      new DxccEntity(/^PY0F/, "Fernando de Noronha", 56, "SA", 13, 11),
      new DxccEntity(/^PY0S/, "St. Peter & St. Paul Rocks", 253, "SA", 13, 11),
      new DxccEntity(/^PY0T/, "Trindade & Martim Vaz Is.", 273, "SA", 15, 11),
      new DxccEntity(/^P[P-Y][0-9]/, "Brasil", 108, "SA", 15, 11),

      //Suriname
      new DxccEntity(/^PZ/, "Suriname", 140, "SA", 12, 9),

      //Netherlands
      new DxccEntity(/^P[A-I]/, "Netherlands", 263, "EU", 27, 14),

      // === R/U-prefix (Russia and former USSR) ===
      //Kaliningrad (must be before European Russia)
      new DxccEntity(/^(U[A-I]2|R[A-I]2)/, "Kaliningrad", 126, "EU", 29, 15),

      //Franz Josef Land (must be before Asiatic Russia)
      new DxccEntity(/^R1F/, "Franz Josef Land", 61, "EU", 75, 40),

      //European Russia
      new DxccEntity(/^U[A-I][0-7]/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^R[A-I][0-7]/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^R[0-7]/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^RM/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^RQ/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^RK/, "European Russia", 54, "EU", 29, 16),
      new DxccEntity(/^RP/, "European Russia", 54, "EU", 29, 16),

      //Asiatic Russia
      new DxccEntity(/^U[A-I][890]/, "Asiatic Russia", 15, "AS", 30, 17),
      new DxccEntity(/^R[A-I][890]/, "Asiatic Russia", 15, "AS", 30, 17),
      new DxccEntity(/^R[A-Z]/, "Asiatic Russia", 15, "AS", 30, 17),
      new DxccEntity(/^R[890]/, "Asiatic Russia", 15, "AS", 30, 17),

      //Uzbekistan
      new DxccEntity(/^U[J-M]/, "Uzbekistan", 292, "AS", 30, 17),

      //Kazakhstan
      new DxccEntity(/^U[N-Q][0-9]/, "Kazakhstan", 130, "AS", 29, 17),

      //Ukraine
      new DxccEntity(/^U[R-Z][0-9]/, "Ukraine", 288, "EU", 29, 16),

      // === S-prefix ===
      //Western Sahara
      new DxccEntity(/^S0/, "Western Sahara", 302, "AF", 46, 33),

      //Bangladesh
      new DxccEntity(/^S2/, "Bangladesh", 305, "AS", 41, 22),

      //Slovenia
      new DxccEntity(/^S5[0-9]/, "Slovenia", 499, "EU", 28, 15),

      //Seychelles
      new DxccEntity(/^S7/, "Seychelles", 379, "AF", 53, 39),

      //Sao Tome & Principe
      new DxccEntity(/^S9/, "Sao Tome & Principe", 219, "AF", 47, 36),

      //Dodecanese (SV5/J45 handled under J-prefix)
      //Crete (SV9/J49 handled under J-prefix)
      //Greece (SV/SZ/J4 handled under J-prefix)

      //Sweden
      new DxccEntity(/^S[A-M]/, "Sweden", 284, "EU", 18, 14),

      //Poland
      new DxccEntity(/^S[N-R]/, "Poland", 269, "EU", 28, 15),

      //Sudan
      new DxccEntity(/^ST/, "Sudan", 466, "AF", 47, 34),

      //Egypt
      new DxccEntity(/^SU/, "Egypt", 478, "AF", 38, 34),

      // === T-prefix ===
      //Tuvalu
      new DxccEntity(/^T2/, "Tuvalu", 282, "OC", 65, 31),

      //W. Kiribati (T30 must be before any broad T3)
      new DxccEntity(/^T30/, "W. Kiribati", 301, "OC", 65, 31),

      //Somalia
      new DxccEntity(/^T5/, "Somalia", 232, "AF", 48, 37),

      //Afghanistan
      new DxccEntity(/^T6/, "Afghanistan", 3, "AS", 40, 21),

      //San Marino
      new DxccEntity(/^T7/, "San Marino", 278, "EU", 28, 15),

      //Palau
      new DxccEntity(/^T8/, "Palau", 22, "OC", 64, 27),

      //Turkey
      new DxccEntity(/^T[A-C][0-9]/, "Turkey", 390, "EU", 39, 20),

      //Guatemala
      new DxccEntity(/^T[GD]/, "Guatemala", 76, "NA", 12, 7),

      //Costa Rica
      new DxccEntity(/^T[IE]/, "Costa Rica", 308, "NA", 11, 7),

      //Iceland
      new DxccEntity(/^TF[0-9]/, "Iceland", 242, "EU", 17, 40),

      //Cameroon
      new DxccEntity(/^TJ/, "Cameroon", 406, "AF", 47, 36),

      //Corsica
      new DxccEntity(/^TK[0-9]/, "Corsica", 214, "EU", 28, 15),

      //Central Africa
      new DxccEntity(/^TL[0-9]/, "Central Africa", 408, "AF", 47, 36),

      //Republic of the Congo
      new DxccEntity(/^TN[0-9]/, "Republic of the Congo", 412, "AF", 52, 36),

      //Mayotte
      new DxccEntity(/^TO/, "Mayotte", 169, "AF", 53, 39),

      //Gabon
      new DxccEntity(/^TR[0-9]/, "Gabon", 420, "AF", 52, 36),

      //Chad
      new DxccEntity(/^TT[0-9]/, "Chad", 410, "AF", 47, 36),

      //Cote D'Ivoire
      new DxccEntity(/^TU[0-9]/, "Cote D'Ivoire", 428, "AF", 46, 35),

      //Benin
      new DxccEntity(/^TY[0-9]/, "Benin", 416, "AF", 46, 35),

      //Mali
      new DxccEntity(/^TZ/, "Mali", 442, "AF", 46, 35),

      // === V-prefix ===
      //Antigua & Barbuda
      new DxccEntity(/^V2/, "Antigua & Barbuda", 94, "NA", 11, 8),

      //Belize
      new DxccEntity(/^V3/, "Belize", 66, "NA", 11, 7),

      //St. Kitts & Nevis
      new DxccEntity(/^V4/, "St. Kitts & Nevis", 249, "NA", 11, 8),

      //Namibia
      new DxccEntity(/^V5/, "Namibia", 464, "AF", 57, 38),

      //Micronesia
      new DxccEntity(/^V6/, "Micronesia", 173, "OC", 65, 27),

      //Marshall Is.
      new DxccEntity(/^V7/, "Marshall Is.", 168, "OC", 65, 31),

      //Brunei
      new DxccEntity(/^V8/, "Brunei", 345, "OC", 54, 28),

      //Canada
      new DxccEntity(/^VE/, "Canada", 362, "NA", 4, 5),

      //Norfolk I. (must be before Australia VK)
      new DxccEntity(/^VK9N/, "Norfolk I.", 189, "OC", 60, 32),

      //Christmas I. (must be before Australia VK)
      new DxccEntity(/^VK9X/, "Christmas I.", 35, "OC", 54, 29),

      //Cocos (Keeling) Is. (must be before Australia VK)
      new DxccEntity(/^VK9C/, "Cocos (Keeling) Is.", 38, "OC", 54, 29),

      //Lord Howe I. (must be before Australia VK)
      new DxccEntity(/^VK9L/, "Lord Howe I.", 147, "OC", 60, 30),

      //Australia
      new DxccEntity(/^VK/, "Australia", 36, "OC", 59, 30),

      //Anguilla
      new DxccEntity(/^VP2E/, "Anguilla", 12, "NA", 11, 8),

      //Montserrat
      new DxccEntity(/^VP2M/, "Montserrat", 96, "NA", 11, 8),

      //British Virgin Is.
      new DxccEntity(/^VP2V/, "British Virgin Is.", 65, "NA", 11, 8),

      //Turks & Caicos Is.
      new DxccEntity(/^VP5/, "Turks & Caicos Is.", 89, "NA", 11, 8),

      //Pitcairn I.
      new DxccEntity(/^VP6/, "Pitcairn I.", 172, "OC", 63, 32),

      //Falkland Is.
      new DxccEntity(/^VP8/, "Falkland Is.", 141, "SA", 16, 13),

      //Bermuda
      new DxccEntity(/^VP9/, "Bermuda", 64, "NA", 11, 5),

      //Hong Kong
      new DxccEntity(/^VR/, "Hong Kong", 321, "AS", 44, 24),

      //Andaman & Nicobar Is. (must be before India)
      new DxccEntity(/^VU4/, "Andaman & Nicobar Is.", 11, "AS", 49, 26),

      //Lakshadweep Is. (must be before India)
      new DxccEntity(/^VU7/, "Lakshadweep Is.", 142, "AS", 41, 22),

      //India
      new DxccEntity(/^VU[12356890]/, "India", 324, "AS", 41, 22),

      // === X-prefix ===
      //Mexico
      new DxccEntity(/^X[A-I]/, "Mexico", 50, "NA", 10, 6),

      //Burkina Faso
      new DxccEntity(/^XT/, "Burkina Faso", 480, "AF", 46, 35),

      //Cambodia
      new DxccEntity(/^XU/, "Cambodia", 312, "AS", 49, 26),

      //Viet Nam
      new DxccEntity(/^XV/, "Viet Nam", 293, "AS", 49, 26),

      //Laos
      new DxccEntity(/^XW/, "Laos", 143, "AS", 49, 26),

      //Macao
      new DxccEntity(/^XX9/, "Macao", 152, "AS", 44, 24),

      //Myanmar
      new DxccEntity(/^X[YZ]/, "Myanmar", 309, "AS", 49, 26),

      // === Y-prefix ===
      //Afghanistan
      new DxccEntity(/^YA/, "Afghanistan", 3, "AS", 40, 21),

      //Indonesia
      new DxccEntity(/^(Y[B-H][0-9])/, "Indonesia", 327, "OC", 51, 28),

      //Iraq
      new DxccEntity(/^YI/, "Iraq", 333, "AS", 39, 21),

      //Vanuatu
      new DxccEntity(/^YJ/, "Vanuatu", 158, "OC", 56, 32),

      //Syria
      new DxccEntity(/^YK[0-9]/, "Syria", 384, "AS", 39, 20),

      //Latvia
      new DxccEntity(/^YL[0-9]/, "Latvia", 145, "EU", 29, 15),

      //Nicaragua
      new DxccEntity(/^YN/, "Nicaragua", 86, "NA", 11, 7),

      //Romania
      new DxccEntity(/^Y[O-R]/, "Romania", 275, "EU", 28, 20),

      //El Salvador
      new DxccEntity(/^YS/, "El Salvador", 74, "NA", 11, 7),

      //Serbia
      new DxccEntity(/^Y[TU]/, "Serbia", 296, "EU", 28, 15),

      //Venezuela
      new DxccEntity(/^Y[V-Y]/, "Venezuela", 148, "SA", 12, 9),

      // === Z-prefix ===
      //Zimbabwe
      new DxccEntity(/^Z2[0-9]/, "Zimbabwe", 452, "AF", 53, 38),

      //Macedonia
      new DxccEntity(/^Z3[0-9]/, "Macedonia", 502, "EU", 28, 15),

      //South Sudan
      new DxccEntity(/^Z8/, "South Sudan", 521, "AF", 48, 34),

      //Albania
      new DxccEntity(/^ZA/, "Albania", 7, "EU", 28, 15),

      //Gibraltar
      new DxccEntity(/^ZB2/, "Gibraltar", 233, "EU", 37, 14),

      //St. Helena
      new DxccEntity(/^ZD7/, "St. Helena", 250, "AF", 66, 36),

      //Ascension I.
      new DxccEntity(/^ZD8/, "Ascension I.", 205, "AF", 66, 36),

      //Tristan da Cunha
      new DxccEntity(/^ZD9/, "Tristan da Cunha", 274, "AF", 66, 38),

      //Cayman Is.
      new DxccEntity(/^ZF/, "Cayman Is.", 69, "NA", 11, 8),

      //Tokelau Is.
      new DxccEntity(/^ZK3/, "Tokelau Is.", 270, "OC", 62, 31),

      //Chatham Is. (must be before New Zealand)
      new DxccEntity(/^ZL7/, "Chatham Is.", 34, "OC", 60, 32),

      //Kermadec Is. (must be before New Zealand)
      new DxccEntity(/^ZL8/, "Kermadec Is.", 133, "OC", 60, 32),

      //New Zealand
      new DxccEntity(/^Z[LM]/, "New Zealand", 170, "OC", 60, 32),

      //Paraguay
      new DxccEntity(/^ZP/, "Paraguay", 132, "SA", 14, 11),

      //Prince Edward & Marion Is. (must be before South Africa)
      new DxccEntity(/^ZS8/, "Prince Edward & Marion Is.", 201, "AF", 57, 38),

      //South Africa
      new DxccEntity(/^(Z[R-U])[0-9]/, "South Africa", 462, "AF", 57, 38),

      //Brasil
      new DxccEntity(/^Z[V-Z][0-9]/, "Brasil", 108, "SA", 15, 11),

      // === Misc patterns ===
      //Pakistan
      new DxccEntity(/^AP[0-9]/, "Pakistan", 372, "AS", 41, 21),

      //Poland (HF prefix)
      new DxccEntity(/^HF[0-9]/, "Poland", 269, "EU", 28, 15),
    ];
  }

  getEntityFromCallsign(callsign) {
    for (const dxccEntity of this.dxccEntities) {
      if (callsign.match(dxccEntity.prefix)) {
        return { entity: dxccEntity.entity };
      }
    }
    return { entity: "Unknown" };
  }

  getCountryFromCallsign(callsign) {
    for (const dxccEntity of this.dxccEntities) {
      if (callsign.match(dxccEntity.prefix)) {
        return {
          callsign,
          entity: dxccEntity.entity,
          dxcc: dxccEntity.dxcc,
          continent: dxccEntity.continent,
          ituZone: dxccEntity.ituZone,
          cqZone: dxccEntity.cqZone,
        };
      }
    }
    return { callsign, entity: "Unknown", dxcc: null, continent: null, ituZone: null, cqZone: null };
  }

  getDxccFromCallsign(callsign) {
    for (const dxccEntity of this.dxccEntities) {
      if (callsign.match(dxccEntity.prefix)) {
        return dxccEntity.dxcc;
      }
    }
    return null;
  }

  getCountryFromDxcc(dxcc_nmber) {
    for (const dxccEntity of this.dxccEntities) {
      if (dxcc_nmber == dxccEntity.dxcc) {
        return {
          entity: dxccEntity.entity,
          continent: dxccEntity.continent,
          ituZone: dxccEntity.ituZone,
          cqZone: dxccEntity.cqZone,
        };
      }
    }
    return { entity: "Unknown", continent: null, ituZone: null, cqZone: null };
  }
}

module.exports = { DxccEntities };
