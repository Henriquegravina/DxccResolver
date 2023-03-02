
// Author: Henrique B. Gravina
// This code is base on 2013_Current_Deleted.txt from ARRL and other sites in the WWW
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


    //Agalega & St. Brandon Is.
    new DxccEntity(/^3B[67]/,"Agalega & St. Brandon Is.", 004   ),
    //Mauritius                          AF    53    39    165
    new DxccEntity(/^3B[8]/,"Mauritius", 165   ),
    //Rodriguez I.
    new DxccEntity(/^3B[9]/,"Rodriguez I.", 207   ),

      // USA
      new DxccEntity(/^(KL|AL|NL|WL)\d*[A-Z]*/ ,"Alaska", 6),
      new DxccEntity(/^A[A-K]/,"United States", 291),
      new DxccEntity(/^[KWN]/,"United States", 291),


      new DxccEntity(/^VE/,"Canada", 362),
      new DxccEntity(/^D[A-R]/,"Germany", 230),
    
      //Italy
      new DxccEntity(/^I[SM]0/,"Sardinia", 225),
      new DxccEntity(/^(?!I[SM]0)(I[A-Z]|I)[0-9]/,"Italy", 248),

        
      //Greece
      new DxccEntity(/^(?!(SV4|J45|SV9|J49))(S[VZ]|J4)/,"Greece", 236),
      //{ prefix: //,"Mount Athos", 180) // SV/A* 
      new DxccEntity(/^(SV5|J45)/,"Dodecanese", 45),
      new DxccEntity(/^(SV9|J49)/,"Crete", 40),
      

      // England
      new DxccEntity(/^M[A-Z,0-9]/,"England", 223   ),
      new DxccEntity(/^(?!(GD|GT|GI|GN|GJ|GH|GM|GS|GU|GP|GW|GC))(G\d|GX\d|G[BM-Z]\d)/,"England", 223   ),
      new DxccEntity(/^(GD|GT)[A-Z\d]*/,"Isle of Man", 114   ),
      new DxccEntity(/^(GI|GN)[A-Z\d]*/,"Northern Ireland", 265   ),
      new DxccEntity(/^(GJ|GH)[A-Z\d]*/,"Jersey", 122   ),
      new DxccEntity(/^(GM|GS)[A-Z\d]*/,"Scotland", 279   ),
      new DxccEntity(/^(GU|GP)[A-Z\d]*/,"Guernsey", 106   ),
      new DxccEntity(/^(GW|GC)[A-Z\d]*/,"Wales", 294   ),

      // Russia
      //UA-UI1-7,RA-RZ*     European Russia                    EU    (E)   16    054
      //new DxccEntity(/^/,"European Russia", 54   ),
      //UA2,RA2*            Kaliningrad                        EU    29    15    126
      new DxccEntity(/^U[A-I][0-7]/,"European Russia", 54  ),
      new DxccEntity(/^R[A-I][0-7]/,"European Russia", 54  ),
      new DxccEntity(/^R[0-7]/,"European Russia", 54  ),
      new DxccEntity(/^U[A-I][890]/,"Asiatic Russia", 15  ),
      new DxccEntity(/^R[A-I][890]/,"Asiatic Russia", 15  ),
      new DxccEntity(/^R[890]/,"Asiatic Russia", 15  ),


      new DxccEntity(/^S5[0-9]/,"Slovenia", 499   ),
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
      new DxccEntity(/^P[P-Y][0-9]/,"Brasil", 108   ),
      new DxccEntity(/^Z[V-Z][0-9]/,"Brasil", 108   ),
      new DxccEntity(/^PY0F/,"Fernando de Noronha", 56   ),
      new DxccEntity(/^PY0S/,"St. Peter & St. Paul Rocks", 253   ),
      new DxccEntity(/^PY0T/,"Trindade & Martim Vaz Is.", 273   ),
     
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

      // Australia
      new DxccEntity(/^VK/,"Australia", 36),
      //Denmark
      new DxccEntity(/^(O[U-W]|OZ)/,"Denmark", 221),
      //Belgium
      new DxccEntity(/^(O[N-T])/,"Belgium", 209),
      //Slovak Republic
      new DxccEntity(/^OM[0-9]/,"Slovak Republic", 504   ),
      //Czech Republic
      new DxccEntity(/^(O[K-L][0-9])/,"Czech Republic", 503   ),
      //Norway
      new DxccEntity(/^(L[A-N][0-9])/,"Norway", 266   ),
      // Sweden
      new DxccEntity(/^((S[A-M][0-9])|7S|8S)/,"Sweden", 284   ),
      // Poland
      new DxccEntity(/^(S[N-R]|HF|3Z)[0-9]/,"Poland", 269   ),
      // Syria
      new DxccEntity(/^YK[0-9]/,"Syria", 384   ),
      // Latvia 
      new DxccEntity(/^YL[0-9]/,"Latvia", 145   ),
      //Hungary  
      new DxccEntity(/^(HA|HG)[0-9]/,"Hungary",  239  ),
      //Switzerland  
      new DxccEntity(/^HB[0-9]/,"Switzerland", 287   ),
      //Turkey
      new DxccEntity(/^T[A-C][0-9]/,"Turkey", 390   ),
      //Iceland
      new DxccEntity(/^TF[0-9]/,"Iceland", 242   ),
      //Corsica
      new DxccEntity(/^TK[0-9]/,"Corsica", 214   ),
      //Kazakhstan
      new DxccEntity(/^U[N-Q][0-9]/,"Kazakhstan", 130   ),
      //Ukraine
      new DxccEntity(/^((U[R-Z])|(E[M-O]))[0-9]/,"Ukraine", 288   ),
      //Zimbabwe
      new DxccEntity(/^Z2[0-9]/,"Zimbabwe", 452),
      //Macedonia
      new DxccEntity(/^Z3[0-9]/,"Macedonia", 502),
      //South Africa
      new DxccEntity(/^(Z[R-U])[0-9]/,"South Africa", 462   ),
      //Luxembourg
      new DxccEntity(/^LX[0-9]/,"Luxembourg", 254),
      //Lithuania
      new DxccEntity(/^LY[0-9]/,"Lithuania", 146),
      //Bulgaria
      new DxccEntity(/^LZ[0-9]/,"Bulgaria", 212),
      //Benin
      new DxccEntity(/^TY[0-9]/,"Benin", 416),
      //Qatar
      new DxccEntity(/^A7/,"Qatar", 376),
      //Bahrain
      new DxccEntity(/^A9/,"Bahrain", 304),
      //Pakistan
      new DxccEntity(/^AP[0-9]/,"Pakistan", 372),

      //Central Africa    
      new DxccEntity(/^TL[0-9]/,"Central Africa", 408),
      //Republic of the Congo
      new DxccEntity(/^TN[0-9]/,"Republic of the Congo", 412),
      //Gabon
      new DxccEntity(/^TR[0-9]/,"Gabon", 420),
      //Chad 
      new DxccEntity(/^TT[0-9]/,"Chad", 410),
      //Cote d'Ivoire
      new DxccEntity(/^TU[0-9]/,"Cote D'Ivoire", 428),

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
  
  getDxccFromCallsign(callsign) {
    for (const dxccEntity of this.dxccEntities) {
      if (callsign.match(dxccEntity.prefix)) {
        return dxccEntity.dxcc;
      }
    }
    return null ;
  }

  getCountryFromDxcc(dxcc_nmber) {
    for (const dxccEntity of this.dxccEntities) {
      if (dxcc_nmber == dxccEntity.dxcc) {
        return dxccEntity.entity;
      }
    }
    return "Unknown";
  }
}

module.exports ={ DxccEntities } 
