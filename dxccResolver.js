
// Author: Henrique B. Gravina
// This code is base on 2013_Current_Deleted.txt from ARRL
// 2023/02/15

class DxccEntity {
  constructor(prefix, entity, dxcc) {
    this.prefix = prefix;
    this.entity = entity;
    this.dxcc = dxcc;
  }
}

class DxccEntities {
  constructor() {
    this.dxccEntities = [

      // Australia
      new DxccEntity(/^VK/,"Australia", 36),
  
      // USA
      new DxccEntity(/^(KL|AL|NL|WL)\d*[A-Z]*/ ,"Alaska", 6),
      new DxccEntity(/^A[A-K]/,"United States", 291),
      new DxccEntity(/^[KWN]/,"United States", 291),


      new DxccEntity(/^VE/,"Canada", 362),
      new DxccEntity(/^D[A-R]/,"Germany", 230),
      
      new DxccEntity(/^I[SM]0/,"Sardinia", 225),
      new DxccEntity(/^(?!I[SM]0)(I[A-Z]|I)[0-9]/,"Italy", 248),

        
      //Greece
      new DxccEntity(/^(?!(SV4|J45|SV9|J49))(S[VZ]|J4)/,"Greece", 236),
      //{ prefix: //,"Mount Athos", 180) // SV/A* 
      new DxccEntity(/^(SV5|J45)/,"Dodecanese", 45),
      new DxccEntity(/^(SV9|J49)/,"Crete", 40),
      
      //Denmark
      new DxccEntity(/^(O[U-W]|OZ)/,"Denmark", 221),

        // England
      new DxccEntity(/^M[A-Z,0-9]/,"England", 223   ),
      new DxccEntity(/^(?!(GD|GT|GI|GN|GJ|GH|GM|GS|GU|GP|GW|GC))(G\d|GX\d|G[M-Z]\d)/,"England", 223   ),
      new DxccEntity(/^(GD|GT)[A-Z\d]*/,"Isle of Man", 114   ),
      new DxccEntity(/^(GI|GN)[A-Z\d]*/,"Northern Ireland", 265   ),
      new DxccEntity(/^(GJ|GH)[A-Z\d]*/,"Jersey", 122   ),
      new DxccEntity(/^(GM|GS)[A-Z\d]*/,"Scotland", 279   ),
      new DxccEntity(/^(GU|GP)[A-Z\d]*/,"Guernsey", 106   ),
      new DxccEntity(/^(GW|GC)[A-Z\d]*/,"Wales", 294   ),

        //Slovenia S5(6)*              Slovenia
      new DxccEntity(/^S5[67]/,"Slovenia", 499   ),
      new DxccEntity(/^OE[0-9]/,"Austria", 206   ),
      new DxccEntity(/^F[0-9]/,"France", 227   ),
      new DxccEntity(/^FR[0-9]/,"Reunion I.", 453   ),
      new DxccEntity(/^E[A-H][0-57]/,"Spain", 281   ),
      new DxccEntity(/^E[A-H]6/,"Balearic Is.", 21   ),
      new DxccEntity(/^E[A-H]8/,"Canary Is.", 29   ),
      new DxccEntity(/^E[A-H]9/,"Ceuta & Melilla", 32   ),

      // Portugal
      new DxccEntity(/^CT[124567890]/,"Portugal", 272   ),
      new DxccEntity(/^CT3/,"Madeira Is.", 256   ),
      new DxccEntity(/^CU/,"Azores", 149   ),

      
      //Brazil
      new DxccEntity(/^P[P-Y][1235689]/,"Brasil", 108   ),
      new DxccEntity(/^Z[V-Z][1235689]/,"Brasil", 108   ),
      new DxccEntity(/^PY0F/,"Fernando de Noronha", 56   ),
      new DxccEntity(/^PY0S/,"St. Peter & St. Paul Rocks", 253   ),
      new DxccEntity(/^PY0T/,"Trindade & Martim Vaz Is.", 273   ),


      new DxccEntity(/^U[A-I][890]/,"Asiatic Russia", 15   ),
      new DxccEntity(/^VU[12356890]/,"India", 324   ),
      new DxccEntity(/^4[XZ][12356890]/,"Israel", 336   ), 
      new DxccEntity(/^O[F-I]/,"Finland", 224   ),      
      new DxccEntity(/^PZ/,"Suriname", 140   ),
      new DxccEntity(/^9A[0-6]/,"Croatia", 497   ),
      new DxccEntity(/^5V/,"Togo", 483   ),
      new DxccEntity(/^9H/,"Malta", 257),
      new DxccEntity(/^9K[012356789]/,"Kuwait", 348   ),
      new DxccEntity(/^C5[A-Z]/,"The Gambia", 422),
      new DxccEntity(/^BG/,"China", 318   ),
      new DxccEntity(/^D[23]/,"Angloa", 401   ),
      new DxccEntity(/^E[U-W]/,"Belarus", 27 ),
      new DxccEntity(/^Y[O-R]/,"Romenia", 275   ),
      new DxccEntity(/^P[A-I]/,"Netherlands", 263   ),
      new DxccEntity(/^E7[2-9]/,"Bosnia-Herzegovina", 501   ),

      // Sweden
      new DxccEntity(/^((S[A-M][0-9])|7S|8S)/,"Sweden", 284   ),
      // Poland
      new DxccEntity(/^S[N-R][0-9]/,"Poland", 269   ),
      // Syria
      new DxccEntity(/^YK[0-9]/,"Syria", 384   ),
      // Latvia 
      new DxccEntity(/^YL[0-9]/,"Latvia", 145   ),

      

    ];
  }
  
  getCountryFromCallsign(callsign) {
    for (const dxccEntity of this.dxccEntities) {
      if (callsign.match(dxccEntity.prefix)) {
        return { callsign, entity: dxccEntity.entity, dxcc: dxccEntity.dxcc };
      }
    }
    return { callsign, entity: "Unknown", dxcc: null };
  }
  
  getCountryFromDxcc(dxcc_nmber) {
    for (const dxccEntity of this.dxccEntities) {
      if (dxcc_nmber == dxccEntity.dxcc) {
        return { entity: dxccEntity.entity, dxcc: dxccEntity.dxcc };
      }
    }
    return { entity: "Unknown", dxcc: null };
  }
}

module.exports ={ DxccEntities } 