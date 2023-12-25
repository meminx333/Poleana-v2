const lineas = [[22, 23, 24, 25]];
const linebs = [[97, 113, 129, 145]];
const linecs = [[230, 231, 232, 233]];
const lineds = [[110, 126, 142, 158]];
const fPlays = [
  [
    1, 2, 3, 4, 5, 7, 8, 16, 29, 30, 32, 44, 45, 46, 48, 61, 64, 80, 81, 82, 98,
    114, 130, 146, 161, 162,
  ],
];
const cfPlays = [[6, 9, 15, 60]];
const sPlays = [
  [
    17, 18, 33, 34, 35, 50, 112, 128, 160, 176, 192, 208, 213, 214, 215, 216,
    217, 218, 224, 229, 234, 241, 242, 243, 244, 245,
  ],
];
const sfPlays = [[0, 51, 96, 144]];
const tPlays = [
  [
    93, 94, 109, 125, 141, 157, 173, 174, 175, 191, 194, 207, 209, 210, 211,
    223, 225, 226, 239, 247, 248, 250, 251, 252, 253, 254,
  ],
];
const tfPlays = [[195, 240, 246, 249]];
const qPlays = [
  [
    10, 11, 12, 13, 14, 21, 26, 31, 37, 38, 39, 40, 41, 42, 47, 63, 79, 95, 127,
    143, 205, 220, 221, 222, 237, 238,
  ],
];
const qfPlays = [[111, 159, 204, 255]];

export function acLine(squares) {
  for (const aline of lineas) {
    const [a, b, c, d] = aline;
    if (
      squares[22] === aline[a] &&
      squares[23] === aline[b] &&
      squares[24] === aline[c] &&
      squares[25] === aline[d]
    )
      console.log(aline);
    return aline;
  }
}

export function bcLine(squares) {
  for (const bline of linebs) {
    const [a, b, c, d] = bline;
    if (
      squares[97] === bline[a] &&
      squares[113] === bline[b] &&
      squares[129] === bline[c] &&
      squares[145] === bline[d]
    )
      console.log(bline);
    return bline;
  }
}
export function ccLine(squares) {
  for (const clines of linecs) {
    const [a, b, c, d] = clines;
    if (
      squares[230] === clines[a] &&
      squares[231] === clines[b] &&
      squares[232] === clines[c] &&
      squares[233] === clines[d]
    )
      console.log(clines);
    return clines;
  }
}
export function dcLine(squares) {
  for (const dlines of lineds) {
    const [a, b, c, d] = dlines;
    if (
      squares[110] === dlines[a] &&
      squares[126] === dlines[b] &&
      squares[142] === dlines[c] &&
      squares[158] === dlines[d]
    )
      console.log(dlines);
    return dlines;
  }
}
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
      a27,
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
      squares[32] === fPlay[a12] &&
      squares[44] === fPlay[a13] &&
      squares[45] === fPlay[a14] &&
      squares[46] === fPlay[a15] &&
      squares[48] === fPlay[a16] &&
      squares[61] === fPlay[a17] &&
      squares[64] === fPlay[a18] &&
      squares[80] === fPlay[a19] &&
      squares[81] === fPlay[a20] &&
      squares[82] === fPlay[a21] &&
      squares[98] === fPlay[a22] &&
      squares[114] === fPlay[a23] &&
      squares[130] === fPlay[a24] &&
      squares[146] === fPlay[a25] &&
      squares[161] === fPlay[a26] &&
      squares[162] === fPlay[a27]
    )
      console.log(fPlay);
    return fPlay;
  }
}
export function sCell(squares) {
  for (const sPlay of sPlays) {
    const [
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
      a27,
    ] = sPlay;
    if (
      squares[17] === sPlay[a2] &&
      squares[18] === sPlay[a3] &&
      squares[33] === sPlay[a4] &&
      squares[34] === sPlay[a5] &&
      squares[35] === sPlay[a6] &&
      squares[50] === sPlay[a7] &&
      squares[112] === sPlay[a8] &&
      squares[128] === sPlay[a9] &&
      squares[160] === sPlay[a10] &&
      squares[176] === sPlay[a11] &&
      squares[192] === sPlay[a12] &&
      squares[208] === sPlay[a13] &&
      squares[213] === sPlay[a14] &&
      squares[214] === sPlay[a15] &&
      squares[215] === sPlay[a16] &&
      squares[216] === sPlay[a17] &&
      squares[217] === sPlay[a18] &&
      squares[218] === sPlay[a19] &&
      squares[224] === sPlay[a20] &&
      squares[229] === sPlay[a21] &&
      squares[234] === sPlay[a22] &&
      squares[241] === sPlay[a23] &&
      squares[242] === sPlay[a24] &&
      squares[243] === sPlay[a25] &&
      squares[244] === sPlay[a26] &&
      squares[245] === sPlay[a27]
    )
      console.log(sPlay);
    return sPlay;
  }
}
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
      a27,
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
    )
      console.log(tPlay);
    return tPlay;
  }
}
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
    )
      console.log(qPlay);
    return qPlay;
  }
}
export function afCell(squares) {
  for (const cfPlay of cfPlays) {
    const [a, b, c, d] = cfPlay;
    if (
      squares[6] === cfPlay[a] &&
      squares[9] === cfPlay[b] &&
      squares[15] === cfPlay[c] &&
      squares[60] === cfPlay[d]
    )
      console.log(cfPlay);
    return cfPlay;
  }
}
export function sfCell(squares) {
  for (const sfPlay of sfPlays) {
    const [a, b, c, d] = sfPlay;
    if (
      squares[0] === sfPlay[a] &&
      squares[51] === sfPlay[b] &&
      squares[96] === sfPlay[c] &&
      squares[144] === sfPlay[d]
    )
      console.log(sfPlay);
    return sfPlay;
  }
}
export function tfCell(squares) {
  for (const tfPlay of tfPlays) {
    const [a, b, c, d] = tfPlay;
    if (
      squares[195] === tfPlay[a] &&
      squares[240] === tfPlay[b] &&
      squares[246] === tfPlay[c] &&
      squares[249] === tfPlay[d]
    )
      console.log(tfPlay);
    return tfPlay;
  }
}
export function qfCell(squares) {
  for (const qfPlay of qfPlays) {
    const [a, b, c, d] = qfPlay;
    if (
      squares[111] === qfPlay[a] &&
      squares[159] === qfPlay[b] &&
      squares[204] === qfPlay[c] &&
      squares[255] === qfPlay[d]
    )
      console.log(qfPlay);
    return qfPlay;
  }
}
