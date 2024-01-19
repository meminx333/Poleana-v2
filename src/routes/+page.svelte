<script>
  import Board from "./Board.svelte";
  import { acLine, bcLine, ccLine, dcLine, pCell, qCell, sCell, tCell, afCell, sfCell, tfCell, qfCell, unNum, doNum, trNum,cuNum,cjNum,ciNum,seNum,siNum,ocNum,nuNum,diNum,onNum,dcNum,teNum,caNum,ceNum, uuFichas, udFichas, utFichas, ucFichas, duFichas, ddFichas, dtFichas, dcFichas, tuFichas, tdFichas, ttFichas, tcFichas, cuFichas, cdFichas, ctFichas, ccFichas } from "./utils.js";
  
  let squares = Array(256);
  $:colaLine = acLine(squares);
  $:colbLine = bcLine(squares);
  $:colcLine = ccLine(squares);
  $:coldLine = dcLine(squares);
  $:asCell = pCell(squares);
  $:dsCell = qCell(squares);
  $:bsCell = sCell(squares);
  $:csCell = tCell(squares);
  $:aCell= afCell(squares);
  $:bCell = sfCell(squares);
  $:cCell = tfCell(squares);
  $:dCell = qfCell(squares);
  $:uNum = unNum(squares);
  $:dNum = doNum(squares);
  $:tNum = trNum(squares);
  $:cNum = cuNum(squares);
  $:jNum = cjNum(squares);
  $:iNum = ciNum(squares);
  $:eNum = seNum(squares);
  $:sNum = siNum(squares);
  $:oNum = ocNum(squares);
  $:nNum = nuNum(squares);
  $:idNum = diNum(squares);
  $:noNum = onNum(squares);
  $:odNum = dcNum(squares);
  $:etNum = teNum(squares);
  $:qNum = caNum(squares);
  $:crNum = ceNum(squares);
  $:uuFi = uuFichas(squares);
  $:udFi = udFichas(squares);
  $:utFi = utFichas(squares);
  $:ucFi = ucFichas(squares);
  $:duFi = duFichas(squares);
  $:ddFi = ddFichas(squares);
  $:dtFi = dtFichas(squares);
  $:dcFi = dcFichas(squares);
  $:tuFi = tuFichas(squares);
  $:tdFi = tdFichas(squares);
  $:ttFi = ttFichas(squares);
  $:tcFi = tcFichas(squares);
  $:cuFi = cuFichas(squares);
  $:cdFi = cdFichas(squares);
  $:ctFi = ctFichas(squares);
  $:ccFi = ccFichas(squares);


</script>

<div class="container">

  <Board size={16}>
    <svelte:fragment slot="game" >
     {#each squares as square, i}
    <button
	  class="square"
    class:calPlaying={colaLine?.includes(i)}
    class:cblPlaying={colbLine?.includes(i)}
    class:cclPlaying={colcLine?.includes(i)}
    class:cdlPlaying={coldLine?.includes(i)}
    class:callPlaying={asCell?.includes(i)}
    class:cbllPlaying={bsCell?.includes(i)}
    class:ccllPlaying={csCell?.includes(i)}
    class:cdllPlaying={dsCell?.includes(i)}
    class:allPlaying={aCell?.includes(i)}
    class:bllPlaying={bCell?.includes(i)}
    class:cllPlaying={cCell?.includes(i)}
    class:dllPlaying={dCell?.includes(i)}
    class:uPlaying={uNum?.includes(i)}
    class:dPlaying={dNum?.includes(i)}
    class:tPlaying={tNum?.includes(i)}
    class:cPlaying={cNum?.includes(i)}
    class:jPlaying={jNum?.includes(i)}
    class:ciPlaying={iNum?.includes(i)}
    class:sePlaying={eNum?.includes(i)}
    class:sPlaying={sNum?.includes(i)}
    class:oPlaying={oNum?.includes(i)}
    class:nPlaying={nNum?.includes(i)}
    class:diPlaying={idNum?.includes(i)}
    class:onPlaying={noNum?.includes(i)}
    class:dcPlaying={odNum?.includes(i)}
    class:tePlaying={etNum?.includes(i)}
    class:caPlaying={qNum?.includes(i)}
    class:cePlaying={crNum?.includes(i)} 
    class:uuPlaying={uuFi?.includes(i)}
    class:udPlaying={udFi?.includes(i)}
    class:utPlaying={utFi?.includes(i)}
    class:ucPlaying={ucFi?.includes(i)}
    class:duPlaying={duFi?.includes(i)}
    class:ddPlaying={ddFi?.includes(i)}
    class:dtPlaying={dtFi?.includes(i)}
    class:docPlaying={dcFi?.includes(i)}
    class:tuPlaying={tuFi?.includes(i)}
    class:tdPlaying={tdFi?.includes(i)}
    class:ttPlaying={ttFi?.includes(i)}
    class:tcPlaying={tcFi?.includes(i)}
    class:cuPlaying={cuFi?.includes(i)}
    class:cdPlaying={cdFi?.includes(i)}
    class:ctPlaying={ctFi?.includes(i)}
    class:ccPlaying={ccFi?.includes(i)}  
    >
   
    </button>    
   
      {/each}
      
    </svelte:fragment>
   
    <div slot="controls">
 
    </div>
  
  </Board>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    height: 100%;
    margin: 0 auto;
  }
   
  .square{
    background: rgb(235, 183, 183);
    border-radius: 0;
    color: #6c3636;
    opacity: 1;
    font-size: 1em;
    padding: 10%;
  }

  div {
    width: 100%;
    height: 100%;
    text-emphasis-color: black;
  }

  .calPlaying{
    background-color: rgb(95, 95, 241);

  }

  .cblPlaying{
    background-color: rgb(234, 234, 103);
  }

  .cclPlaying{
    background-color: rgb(240, 97, 97);
  }

  .cdlPlaying{
    background-color: rgb(83, 234, 83);
  }

  .callPlaying{
    background-color: rgb(233, 233, 240);
  }

  .cbllPlaying{
    background-color: rgb(233, 233, 240);
  }
  
  .ccllPlaying{
    background-color: rgb(233, 233, 240);
  }

  .cdllPlaying{
    background-color: rgb(233, 233, 240);
  }

  .allPlaying{
    background-color: blue;
  }

  .bllPlaying{
    background-color: yellow;
  }

  .cllPlaying{
    background-color: red;
  }

  .dllPlaying{
    background-color: green;
  }

  .uPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\1.png");
    background-size: cover;
  }
  .dPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\2.png");
    background-size: cover;
  }
  .tPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\3.png");
    background-size: cover;
  }
  .cPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\4.png");
    background-size: cover;
  }
  .ciPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\5.png");
    background-size: cover;
  }
  .sePlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\6.png");
    background-size: cover;
  }
  .sPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\7.png");
    background-size: cover;
  }
  .oPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\8.png");
    background-size: cover;
  }
  .nPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\9.png");
    background-size: cover;
  }
  .diPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\10.png");
    background-size: cover;
  }
  .onPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\11.png");
    background-size: cover;
  }
  .dcPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\12.png");
    background-size: contain;
  }
  .tePlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\13.png");
    background-size: cover;
  }
  .caPlaying{
    background-image: url("C:\Users\memo_\cana\src\routes\numeros\14.png");
    background-size: cover;
  }
  .cePlaying{
    padding: 10%;
  }
  .uuPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha11.png");
  size: cover;
  }
  .udPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha12.png");
  size: cover;
  }
  .utPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha13.png");
  size: cover;
  }
  .ucPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha14.png");
  size: cover;
  }
  .duPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha21.png");
  size: cover;
  }
  .ddPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha22.png");
  size: cover;
  }
  .dtPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha23.png");
  size: cover;
  }
  .docPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha24.png");
  size: cover;
  }
  .tuPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha31.png");
  size: cover;
  }
  .tdPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha32.png");
  size: cover;
  }
  .ttPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha33.png");
  size: cover;
  }
  .tcPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha34.png");
  size: cover;
  }
  .cuPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha41.png");
  size: cover;
  }
  .cdPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha42.png");
  size: cover;
  }
  .ctPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha43.png");
  size: cover;
  }
  .ccPlaying{
  background-image: url("C:\Users\memo_\cana\src\routes\fichas\ficha44.png");
  size: cover;
  }
  .container:has(.calPlaying, .cblPlaying .cclPlaying, .cdlPlaying) .square:not(.calPlaying, .cblPlaying .cclPlaying, .cdlPlaying) {
    color: #7535be;

  }
</style>