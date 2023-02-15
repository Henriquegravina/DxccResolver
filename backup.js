
// Author: Henrique B. Gravina
// This code is base on 2013_Current_Deleted.txt from ARRL

const dxccEntities = [
  { prefix: /^VK/, entity: "Australia", dxcc: 36 },
  
  // USA
  { prefix: /^(KL|AL|NL|WL)\d*[A-Z]*/ , entity: "Alaska", dxcc: 006 },
  { prefix: /^A[A-K]/, entity: "United States", dxcc: 291 },
  { prefix: /^[KWN]/, entity: "United States", dxcc: 291 },


  { prefix: /^VE/, entity: "Canada", dxcc: 362 },
  { prefix: /^D[A-R]/, entity: "Germany", dxcc: 230 },
  { prefix: /^I[SM]0/, entity: "Sardinia", dxcc: 225 },
  { prefix: /^I[AZ][0-9]/, entity: "Italy", dxcc: 248 },
  

  //Greece
  { prefix: /^(?!(SV4|J45|SV9|J49))(S[VZ]|J4)/, entity: "Greece", dxcc: 236 },
  //{ prefix: //, entity: "Mount Athos", dxcc: 180  }, // SV/A* 
  { prefix: /^(SV5|J45)/, entity: "Dodecanese", dxcc: 045  },
  { prefix: /^(SV9|J49)/, entity: "Crete", dxcc: 040 },

  // England
  { prefix: /^M[A-Z,0-9]/, entity: "England", dxcc: 223 },
  { prefix: /^(?!(GD|GT|GI|GN|GJ|GH|GM|GS|GU|GP|GW|GC))(G\d|GX\d|G[M-Z]\d)/, entity: "England", dxcc: 223 },
  { prefix: /^(GD|GT)[A-Z\d]*/, entity: "Isle of Man", dxcc: 114 },
  { prefix: /^(GI|GN)[A-Z\d]*/, entity: "Northern Ireland", dxcc: 265 },
  { prefix: /^(GJ|GH)[A-Z\d]*/, entity: "Jersey", dxcc: 122 },
  { prefix: /^(GM|GS)[A-Z\d]*/, entity: "Scotland", dxcc: 279 },
  { prefix: /^(GU|GP)[A-Z\d]*/, entity: "Guernsey", dxcc: 106 },
  { prefix: /^(GW|GC)[A-Z\d]*/, entity: "Wales", dxcc: 294 },

  //Slovenia S5(6)*              Slovenia
  { prefix: /^S5[67]/, entity: "Slovenia", dxcc: 499 },

  { prefix: /^OE[0-9]/, entity: "Austria", dxcc: 206 },
  { prefix: /^F[0-9]/, entity: "France", dxcc: 227 },
  { prefix: /^FR[0-9]/, entity: "Reunion I.", dxcc: 453 },
  { prefix: /^E[A-H][0-57]/, entity: "Spain", dxcc: 281 },
  { prefix: /^E[A-H]6/, entity: "Balearic Is.", dxcc: 021 },
  { prefix: /^E[A-H]8/, entity: "Canary Is.", dxcc: 029 },
  { prefix: /^E[A-H]9/, entity: "Ceuta & Melilla", dxcc: 032 },

  // Portugal
  { prefix: /^CT[124567890]/, entity: "Portugal", dxcc: 272 },
  { prefix: /^CT3/, entity: "Madeira Is.", dxcc: 256 },
  { prefix: /^CU/, entity: "Azores", dxcc: 149 },
  
  { prefix: /^U[A-I][890]/, entity: "Asiatic Russia", dxcc: 015 },
  { prefix: /^VU[12356890]/, entity: "India", dxcc: 324 },
  { prefix: /^4[XZ][12356890]/, entity: "Israel", dxcc: 336 },
  
  //Brazil
  { prefix: /^P[P-Y][1235689]/, entity: "Brasil", dxcc: 108 },
  { prefix: /^Z[V-Z][1235689]/, entity: "Brasil", dxcc: 108 },
  { prefix: /^PY0F/, entity: "Fernando de Noronha", dxcc: 056 },
  { prefix: /^PY0S/, entity: "St. Peter & St. Paul Rocks", dxcc: 253 },
  { prefix: /^PY0T/, entity: "Trindade & Martim Vaz Is.", dxcc: 273 },

  { prefix: /^O[F-I]/, entity: "Finland", dxcc: 224 },
  
  { prefix: /^PZ/, entity: "Suriname", dxcc: 140 },
  { prefix: /^9A[012356]/, entity: "Croatia", dxcc: 497 },
  { prefix: /^5V/, entity: "Togo", dxcc: 483 },
  { prefix: /^9H/, entity: "Malta", dxcc: 257  },
  { prefix: /^9K[012356789]/, entity: "Kuwait", dxcc: 348 },
  { prefix: /^C5[A-Z]/, entity: "The Gambia", dxcc: 422  },
  { prefix: /^BG/, entity: "China", dxcc: 318 },
  { prefix: /^D[23]/, entity: "Angloa", dxcc: 401 },
  { prefix: /^E[U-W]/, entity: "Belarus", dxcc: 027 },
  { prefix: /^Y[O-R]/, entity: "Romenia", dxcc: 275 },
  { prefix: /^P[A-I]/, entity: "Netherlands", dxcc: 263 },
  { prefix: /^E7[2-9]/, entity: "Bosnia-Herzegovina", dxcc: 501 },
  
  
  // { prefix: //, entity: "", dxcc:  },
  
];

const getCountryFromCallsign = (callsign) => {
  for (const { prefix, entity, dxcc } of dxccEntities) {
    if (callsign.match(prefix)) {
      return { callsign, entity, dxcc };
    }
  }
  return { callsign, entity: "Unknown", dxcc: null };
};

const getCountryFromDxcc = (dxcc_nmber) => {
  for (const { prefix, entity, dxcc } of dxccEntities) {
    if (dxcc_nmber == dxcc ) {
      return { entity, dxcc };
    }
  }
  return { callsign, entity: "Unknown", dxcc: null };
};

//WebService:

 const express = require("express");
 const app = express();


app.get("/call/:callsign", (req, res) => {
  const { callsign } = req.params;
  const result = getCountryFromCallsign(callsign.toUpperCase());
  res.json(result);
});

app.get("/dxcc/:dxcc_number", (req, res) => {
  const { dxcc_number } = req.params;
  const result = getCountryFromDxcc(dxcc_number);
  res.json(result);
});



app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
