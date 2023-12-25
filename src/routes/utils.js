export const lineas = [ [22, 23, 24, 25] ];
export const linebs = [ [97, 113, 129, 145] ];
export const linecs = [ [214, 215, 216, 217] ];
export const lineds = [ [108, 124, 140, 156] ];
export const aNs =[ [53, 54, 55, 56, 57, 58, 68, 69, 70, 71, 72, 73, 74, 75, 83, 83, 91, 92, 99, 100, 107, 108, 115, 116, 123, 124, 131, 132, 139, 140, 147, 148, 155, 156, 163, 164, 171, 172, 180, 181, 182, 183, 184, 185, 186, 187, 197, 198, 199, 200, 201, 202] ]; 
export const bNs =[ [85, 86, 87, 88, 89, 90, 101, 102, 103, 104, 105, 106, 117, 118, 119, 120, 121, 122, 133, 134, 135, 136, 137, 138, 149, 150, 151, 152, 153, 154, 165, 166, 167, 168, 169, 170] ]; 
export let cNs = [ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,26,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,47,48,50,51,60,61,63,64,79,80,81,82,93,94,95,96,98,109,111,112,114,125,127,128,130,141,143,144,146,157,159,160,162,173,175,176,191,192,194,195,204,205,207,208,209,210,211,213,214,215,216,217,219,220,221,222,223,224,225,226,229,234,235,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255] ];

export function colorTablero(squares, cNs, color) {
const colores = [];
if (squares.include[cNs] ) {
  
}
}

export function acLine(squares) {
    for (const aline of lineas) {
        const [a, b, c, d] = aline;
        if (squares[22] === aline [a] &&  squares[23] === aline [b] && squares[24] === aline [c] && squares[25] === aline [d] ) {
          console.log(aline)
          return {
            props: {
              color: 970303
          }
        };
      }
    }
    for (const bline of linebs) {
        const [a, b, c, d] = bline;
        if (squares[97] === bline [a] &&  squares[113] === bline [b] && squares[129] === bline [c] && squares[145] === bline [d] ) {
          console.log(bline)
          return {
            props: {
              color: 66
          }
        };
        }
      }
      for (const clines of linecs) {
        const [a, b, c, d] = clines;
        if (squares[22] === clines [a] &&  squares[115] === clines [b] && squares[116] === clines [c] && squares[117] === clines [d] ) {
          console.log(clines)
          return {
            props: {
              color: 56              
          }
        };

        }
      }
      for (const dlines of lineds) {
        const [a, b, c, d] = dlines;
        if (squares[108] === dlines [a] &&  squares[124] === dlines [b] && squares[140] === dlines [c] && squares[156] === dlines [d] ) {
          console.log(dlines);
          return {
            props: {
              color: 14
        }
        };
      }
    }
}