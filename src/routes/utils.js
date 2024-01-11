/* eslint-disable valid-jsdoc */
const lineas = [[22, 23, 24, 25]];
const linebs = [[97, 113, 129, 145]];
const linecs = [[230, 231, 232, 233]];
const lineds = [[110, 126, 142, 158]];
const fPlays = [
  [
    1, 2, 3, 4, 5, 7, 8, 16, 29, 30, 32, 44, 45, 46, 48, 61, 64, 80, 81, 82, 98,
    114, 130, 146, 161, 162,
  ]];
const qPlays = [
  [
    10, 11, 12, 13, 14, 21, 26, 31, 37, 38, 39, 40, 41, 42, 47,
    63, 79, 95, 127, 143, 205, 220, 221, 222, 237, 238,
  ],
];
const sPlays = [
  [
    17, 18, 33, 34, 35, 50, 112, 128, 160, 176, 192, 208, 213, 214, 215, 216,
    217, 218, 224, 229, 234, 241, 242, 243, 244, 245,
  ],
];
const tPlays = [
  [
    93, 94, 109, 125, 141, 157, 173, 174, 175, 191, 194, 207, 209, 210, 211,
    223, 225, 226, 239, 247, 248, 250, 251, 252, 253, 254,
  ],
];
const cfPlays = [[6, 9, 15, 60]];
const sfPlays = [[0, 51, 96, 144]];
const tfPlays = [[195, 240, 246, 249]];
const qfPlays = [[111, 159, 204, 255]];
const unoNums = [[8, 17, 26, 30, 81, 112, 143, 174, 225, 229, 238, 247]];
const dosNums = [[7, 18, 42, 46, 82, 127, 128, 173, 209, 213, 237, 248]];
const treNums = [[6, 29, 33, 41, 98, 111, 144, 157, 214, 222, 226, 249]];
const cuaNums = [[5, 34, 45, 95, 160, 210, 221, 250]];
const cujNums = [[39, 40, 114, 125, 130, 141, 215, 216]];
const cinNums = [[4, 35, 38, 61, 79, 109, 146, 176, 194, 217, 220, 251]];
const seiNums = [[3, 37, 44, 50, 63, 93, 162, 192, 205, 211, 218, 252]];
const sieNums = [[2, 21, 47, 51, 60, 94, 161, 195, 204, 208, 234, 253]];
const ochNums = [[1, 31, 224, 254]];
const nueNums = [[0, 15, 240, 255]];
const dieNums = [[14, 16, 239, 241]];
const oncNums = [[13, 32, 223, 242]];
const docNums = [[12, 48, 207, 243]];
const trcNums = [[11, 64, 191, 244]];
const catNums = [[10, 80, 175, 245]];
const cerNums = [[9, 96, 156, 246]];

/**
 * @param {any[]} squares
 */
export function acLine(squares) {
  for (const aline of lineas) {
    const [a, b, c, d] = aline;
    if (
      squares[22] === aline[a] &&
      squares[23] === aline[b] &&
      squares[24] === aline[c] &&
      squares[25] === aline[d]
    ) {
      console.log(aline);
    }
    return aline;
  }
}

/**
 * @param {any[]} squares
 */
export function bcLine(squares) {
  for (const bline of linebs) {
    const [a, b, c, d] = bline;
    if (
      squares[97] === bline[a] &&
      squares[113] === bline[b] &&
      squares[129] === bline[c] &&
      squares[145] === bline[d]
    ) {
      console.log(bline);
    }
    return bline;
  }
}
/**
 * @param {any[]} squares
 */
export function ccLine(squares) {
  for (const clines of linecs) {
    const [a, b, c, d] = clines;
    if (
      squares[230] === clines[a] &&
      squares[231] === clines[b] &&
      squares[232] === clines[c] &&
      squares[233] === clines[d]
    ) {
      console.log(clines);
    }
    return clines;
  }
}
/**
 * @param {any[]} squares
 */
export function dcLine(squares) {
  for (const dlines of lineds) {
    const [a, b, c, d] = dlines;
    if (
      squares[110] === dlines[a] &&
      squares[126] === dlines[b] &&
      squares[142] === dlines[c] &&
      squares[158] === dlines[d]
    ) {
      console.log(dlines);
    }
    return dlines;
  }
}
/**
 * @param {any[]} squares
 */
export function pCell(squares) {
  for (const fPlay of fPlays) {
    const [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
    ] = fPlay;
    if (
      squares[1] === fPlay[a1] &&
      squares[2] === fPlay[a2] &&
      squares[3] === fPlay[a3] &&
      squares[4] === fPlay[a4] &&
      squares[5] === fPlay[a5] &&
      squares[7] === fPlay[a6] &&
      squares[8] === fPlay[a7] &&
      squares[16] === fPlay[a8] &&
      squares[29] === fPlay[a9] &&
      squares[30] === fPlay[a10] &&
      squares[32] === fPlay[a11] &&
      squares[44] === fPlay[a12] &&
      squares[45] === fPlay[a13] &&
      squares[46] === fPlay[a14] &&
      squares[48] === fPlay[a15] &&
      squares[61] === fPlay[a16] &&
      squares[64] === fPlay[a17] &&
      squares[80] === fPlay[a18] &&
      squares[81] === fPlay[a19] &&
      squares[82] === fPlay[a20] &&
      squares[98] === fPlay[a21] &&
      squares[114] === fPlay[a22] &&
      squares[130] === fPlay[a23] &&
      squares[146] === fPlay[a24] &&
      squares[161] === fPlay[a25] &&
      squares[162] === fPlay[a26]
    ) {
      console.log(fPlay);
    }
    return fPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function qCell(squares) {
  for (const qPlay of qPlays) {
    const [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
    ] = qPlay;
    if (
      squares[10] === qPlay[a1] &&
      squares[11] === qPlay[a2] &&
      squares[12] === qPlay[a3] &&
      squares[13] === qPlay[a4] &&
      squares[14] === qPlay[a5] &&
      squares[21] === qPlay[a6] &&
      squares[26] === qPlay[a7] &&
      squares[31] === qPlay[a8] &&
      squares[37] === qPlay[a9] &&
      squares[38] === qPlay[a10] &&
      squares[39] === qPlay[a11] &&
      squares[40] === qPlay[a12] &&
      squares[41] === qPlay[a13] &&
      squares[42] === qPlay[a14] &&
      squares[47] === qPlay[a15] &&
      squares[63] === qPlay[a16] &&
      squares[79] === qPlay[a17] &&
      squares[95] === qPlay[a18] &&
      squares[127] === qPlay[a19] &&
      squares[143] === qPlay[a20] &&
      squares[205] === qPlay[a21] &&
      squares[220] === qPlay[a22] &&
      squares[221] === qPlay[a23] &&
      squares[222] === qPlay[a24] &&
      squares[237] === qPlay[a25] &&
      squares[238] === qPlay[a26]
    ) {
      console.log(qPlay);
    }
    return qPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function sCell(squares) {
  for (const sPlay of sPlays) {
    const [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
    ] = sPlay;
    if (
      squares[17] === sPlay[a1] &&
      squares[18] === sPlay[a2] &&
      squares[33] === sPlay[a3] &&
      squares[34] === sPlay[a4] &&
      squares[35] === sPlay[a5] &&
      squares[50] === sPlay[a6] &&
      squares[112] === sPlay[a7] &&
      squares[128] === sPlay[a8] &&
      squares[160] === sPlay[a9] &&
      squares[176] === sPlay[a10] &&
      squares[192] === sPlay[a11] &&
      squares[208] === sPlay[a12] &&
      squares[213] === sPlay[a13] &&
      squares[214] === sPlay[a14] &&
      squares[215] === sPlay[a15] &&
      squares[216] === sPlay[a16] &&
      squares[217] === sPlay[a17] &&
      squares[218] === sPlay[a18] &&
      squares[224] === sPlay[a19] &&
      squares[229] === sPlay[a20] &&
      squares[234] === sPlay[a21] &&
      squares[241] === sPlay[a22] &&
      squares[242] === sPlay[a23] &&
      squares[243] === sPlay[a24] &&
      squares[244] === sPlay[a25] &&
      squares[245] === sPlay[a26]
    ) {
      console.log(sPlay);
    }
    return sPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function tCell(squares) {
  for (const tPlay of tPlays) {
    const [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
    ] = tPlay;
    if (
      squares[93] === tPlay[a1] &&
      squares[94] === tPlay[a2] &&
      squares[109] === tPlay[a3] &&
      squares[125] === tPlay[a4] &&
      squares[141] === tPlay[a5] &&
      squares[157] === tPlay[a6] &&
      squares[173] === tPlay[a7] &&
      squares[174] === tPlay[a8] &&
      squares[175] === tPlay[a9] &&
      squares[191] === tPlay[a10] &&
      squares[194] === tPlay[a11] &&
      squares[207] === tPlay[a12] &&
      squares[209] === tPlay[a13] &&
      squares[210] === tPlay[a14] &&
      squares[211] === tPlay[a15] &&
      squares[223] === tPlay[a16] &&
      squares[225] === tPlay[a17] &&
      squares[226] === tPlay[a18] &&
      squares[239] === tPlay[a19] &&
      squares[247] === tPlay[a20] &&
      squares[248] === tPlay[a21] &&
      squares[250] === tPlay[a22] &&
      squares[251] === tPlay[a23] &&
      squares[252] === tPlay[a24] &&
      squares[253] === tPlay[a25] &&
      squares[254] === tPlay[a26]
    ) {
      console.log(tPlay);
    }
    return tPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function afCell(squares) {
  for (const cfPlay of cfPlays) {
    const [a, b, c, d] = cfPlay;
    if (
      squares[6] === cfPlay[a] &&
      squares[9] === cfPlay[b] &&
      squares[15] === cfPlay[c] &&
      squares[60] === cfPlay[d]
    ) {
      console.log(cfPlay);
    }
    return cfPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function sfCell(squares) {
  for (const sfPlay of sfPlays) {
    const [a, b, c, d] = sfPlay;
    if (
      squares[0] === sfPlay[a] &&
      squares[51] === sfPlay[b] &&
      squares[96] === sfPlay[c] &&
      squares[144] === sfPlay[d]
    ) {
      console.log(sfPlay);
    }
    return sfPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function tfCell(squares) {
  for (const tfPlay of tfPlays) {
    const [a, b, c, d] = tfPlay;
    if (
      squares[195] === tfPlay[a] &&
      squares[240] === tfPlay[b] &&
      squares[246] === tfPlay[c] &&
      squares[249] === tfPlay[d]
    ) {
      console.log(tfPlay);
    }
    return tfPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function qfCell(squares) {
  for (const qfPlay of qfPlays) {
    const [a, b, c, d] = qfPlay;
    if (
      squares[111] === qfPlay[a] &&
      squares[159] === qfPlay[b] &&
      squares[204] === qfPlay[c] &&
      squares[255] === qfPlay[d]
    ) {
      console.log(qfPlay);
    }
    return qfPlay;
  }
}
/**
 * @param {any[]} squares
 */
export function unNum(squares) {
  for (const unoNum of unoNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = unoNum;
    if (
      squares[8] === unoNum[a1] &&
      squares[17] === unoNum[a2] &&
      squares[26] === unoNum[a3] &&
      squares[30] === unoNum[a4] &&
      squares[81] === unoNum[a5] &&
      squares[112] === unoNum[a6] &&
      squares[143] === unoNum[a7] &&
      squares[174] === unoNum[a8] &&
      squares[225] === unoNum[a9] &&
      squares[229] === unoNum[a10] &&
      squares[238] === unoNum[a11] &&
      squares[247] === unoNum[a12]
    ) {
      console.log(unoNum);
    }
    return unoNum;
  }
}
/**
 * @param {any[]} squares
 */
export function doNum(squares) {
  for (const dosNum of dosNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = dosNum;
    if (
      squares[7] === dosNum[a1] &&
      squares[18] === dosNum[a2] &&
      squares[42] === dosNum[a3] &&
      squares[46] === dosNum[a4] &&
      squares[82] === dosNum[a5] &&
      squares[127] === dosNum[a6] &&
      squares[128] === dosNum[a7] &&
      squares[173] === dosNum[a8] &&
      squares[209] === dosNum[a9] &&
      squares[213] === dosNum[a10] &&
      squares[237] === dosNum[a11] &&
      squares[248] === dosNum[a12]
    ) {
      console.log(dosNum);
    }
    return dosNum;
  }
}
/**
 * @param {any[]} squares
 */
export function trNum(squares) {
  for (const treNum of treNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = treNum;
    if (
      squares[6] === treNum[a1] &&
      squares[29] === treNum[a2] &&
      squares[33] === treNum[a3] &&
      squares[41] === treNum[a4] &&
      squares[98] === treNum[a5] &&
      squares[111] === treNum[a6] &&
      squares[144] === treNum[a7] &&
      squares[157] === treNum[a8] &&
      squares[214] === treNum[a9] &&
      squares[222] === treNum[a10] &&
      squares[226] === treNum[a11] &&
      squares[249] === treNum[a12]
    ) {
      console.log(treNum);
    }
    return treNum;
  }
}
/**
 * @param {any[]} squares
 */
export function cuNum(squares) {
  for (const cuaNum of cuaNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8] = cuaNum;
    if (
      squares[5] === cuaNum[a1] &&
      squares[34] === cuaNum[a2] &&
      squares[45] === cuaNum[a3] &&
      squares[95] === cuaNum[a4] &&
      squares[160] === cuaNum[a5] &&
      squares[210] === cuaNum[a6] &&
      squares[221] === cuaNum[a7] &&
      squares[250] === cuaNum[a8]
    ) {
      console.log(cuaNum);
    }
    return cuaNum;
  }
}
/**
 * @param {any[]} squares
 */
export function cjNum(squares) {
  for (const cujNum of cujNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8] = cujNum;
    if (
      squares[39] === cujNum[a1] &&
      squares[40] === cujNum[a2] &&
      squares[114] === cujNum[a3] &&
      squares[125] === cujNum[a4] &&
      squares[130] === cujNum[a5] &&
      squares[141] === cujNum[a6] &&
      squares[215] === cujNum[a7] &&
      squares[216] === cujNum[a8]
    ) {
      console.log(cujNum);
    }
    return cujNum;
  }
}
/**
 * @param {any[]} squares
 */
export function ciNum(squares) {
  for (const cinNum of cinNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = cinNum;
    if (
      squares[4] === cinNum[a1] &&
      squares[35] === cinNum[a2] &&
      squares[38] === cinNum[a3] &&
      squares[61] === cinNum[a4] &&
      squares[79] === cinNum[a5] &&
      squares[109] === cinNum[a6] &&
      squares[146] === cinNum[a7] &&
      squares[176] === cinNum[a8] &&
      squares[194] === cinNum[a9] &&
      squares[217] === cinNum[a10] &&
      squares[220] === cinNum[a11] &&
      squares[251] === cinNum[a12]
    ) {
      console.log(cinNum);
    }
    return cinNum;
  }
}
/**
 * @param {any[]} squares
 */
export function seNum(squares) {
  for (const seiNum of seiNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = seiNum;
    if (
      squares[3] === seiNum[a1] &&
      squares[37] === seiNum[a2] &&
      squares[44] === seiNum[a3] &&
      squares[50] === seiNum[a4] &&
      squares[63] === seiNum[a5] &&
      squares[93] === seiNum[a6] &&
      squares[162] === seiNum[a7] &&
      squares[192] === seiNum[a8] &&
      squares[205] === seiNum[a9] &&
      squares[211] === seiNum[a10] &&
      squares[218] === seiNum[a11] &&
      squares[252] === seiNum[a12]
    ) {
      console.log(seiNum);
    }
    return seiNum;
  }
}
/**
 * @param {any[]} squares
 */
export function siNum(squares) {
  for (const sieNum of sieNums) {
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = sieNum;
    if (
      squares[2] === sieNum[a1] &&
      squares[21] === sieNum[a2] &&
      squares[47] === sieNum[a3] &&
      squares[51] === sieNum[a4] &&
      squares[60] === sieNum[a5] &&
      squares[94] === sieNum[a6] &&
      squares[161] === sieNum[a7] &&
      squares[195] === sieNum[a8] &&
      squares[204] === sieNum[a9] &&
      squares[208] === sieNum[a10] &&
      squares[234] === sieNum[a11] &&
      squares[253] === sieNum[a12]
    ) {
      console.log(sieNum);
    }
    return sieNum;
  }
}
/**
 * @param {any[]} squares
 */
export function ocNum(squares) {
  for (const ochNum of ochNums) {
    const [a, b, c, d] = ochNum;
    if (
      squares[1] === ochNum[a] &&
      squares[31] === ochNum[b] &&
      squares[224] === ochNum[c] &&
      squares[254] === ochNum[d]
    ) {
      console.log(ochNum);
    }
    return ochNum;
  }
}
/**
 * @param {any[]} squares
 */
export function nuNum(squares) {
  for (const nueNum of nueNums) {
    const [a, b, c, d] = nueNum;
    if (
      squares[0] === nueNum[a] &&
      squares[15] === nueNum[b] &&
      squares[240] === nueNum[c] &&
      squares[255] === nueNum[d]
    ) {
      console.log(nueNum);
    }
    return nueNum;
  }
}
/**
 * @param {any[]} squares
 */
export function diNum(squares) {
  for (const dieNum of dieNums) {
    const [a, b, c, d] = dieNum;
    if (
      squares[14] === dieNum[a] &&
      squares[16] === dieNum[b] &&
      squares[239] === dieNum[c] &&
      squares[241] === dieNum[d]
    ) {
      console.log(dieNum);
    }
    return dieNum;
  }
}
/**
 * @param {any[]} squares
 */
export function onNum(squares) {
  for (const oncNum of oncNums) {
    const [a, b, c, d] = oncNum;
    if (
      squares[13] === oncNum[a] &&
      squares[32] === oncNum[b] &&
      squares[223] === oncNum[c] &&
      squares[242] === oncNum[d]
    ) {
      console.log(oncNum);
    }
    return oncNum;
  }
}
/**
 * @param {any[]} squares
 */
export function dcNum(squares) {
  for (const docNum of docNums) {
    const [a, b, c, d] = docNum;
    if (
      squares[12] === docNum[a] &&
      squares[48] === docNum[b] &&
      squares[207] === docNum[c] &&
      squares[243] === docNum[d]
    ) {
      console.log(docNum);
    }
    return docNum;
  }
}
/**
 * @param {any[]} squares
 */
export function teNum(squares) {
  for (const trcNum of trcNums) {
    const [a, b, c, d] = trcNum;
    if (
      squares[11] === trcNum[a] &&
      squares[64] === trcNum[b] &&
      squares[191] === trcNum[c] &&
      squares[244] === trcNum[d]
    ) {
      console.log(trcNum);
    }
    return trcNum;
  }
}
/**
 * @param {any[]} squares
 */
export function caNum(squares) {
  for (const catNum of catNums) {
    const [a, b, c, d] = catNum;
    if (
      squares[10] === catNum[a] &&
      squares[80] === catNum[b] &&
      squares[175] === catNum[c] &&
      squares[245] === catNum[d]
    ) {
      console.log(catNum);
    }
    return catNum;
  }
}
/**
 * @param {any[]} squares
 */
export function ceNum(squares) {
  for (const cerNum of cerNums) {
    const [a, b, c, d] = cerNum;
    if (
      squares[9] === cerNum[a] &&
      squares[96] === cerNum[b] &&
      squares[156] === cerNum[c] &&
      squares[246] === cerNum[d]
    ) {
      console.log(cerNum);
    }
    return cerNum;
  }
}
