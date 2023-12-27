<script>
  import Board from "./Board.svelte";
  import { acLine, bcLine, ccLine, dcLine, pCell, sCell, tCell, qCell, afCell, sfCell, tfCell, qfCell, unNum, doNum, trNum,cuNum,cjNum,ciNum,seNum,siNum,ocNum,nuNum,diNum,onNum,dcNum,teNum,caNum,ceNum } from "./utils.js";
  
  let squares = Array(256).fill('');
  let next = "x";
  $:colaLine = acLine(squares);
  $:colbLine = bcLine(squares);
  $:colcLine = ccLine(squares);
  $:coldLine = dcLine(squares);
  $:asCell = pCell(squares);
  $:bsCell = sCell(squares);
  $:csCell = tCell(squares);
  $:dsCell = qCell(squares);
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

</script>

<div class="container">
  <Board size={16}>
    <svelte:fragment slot="game">
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

	  disabled = {square}
	  on:load={() => {

      }}
	  >
          { square } 
        </button>
      {/each}
    </svelte:fragment>

    <div slot="controls">
      <button
        on:click={() => {
          squares = Array(256).fill("");
          next = "x";
        }}
      >
        Reset
      </button>
    </div>
  </Board>
  console.log({squares})
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

  .square,
  .square:disabled {
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
  }

  .calPlaying{
    color: blue;
    background-color: rgb(95, 95, 241);
  }
  .cblPlaying{
    color: rgb(217, 255, 0);
    background-color: rgb(234, 234, 103);
  }
  .cclPlaying{
    color: rgb(255, 0, 0);
    background-color: rgb(240, 97, 97);
  }
  .cdlPlaying{
    color: rgb(0, 255, 30);
    background-color: rgb(83, 234, 83);
  }
  .callPlaying{
    color: rgb(233, 233, 240);
    background-color: rgb(233, 233, 240);
  }
  .cbllPlaying{
    color: rgb(233, 233, 240);
    background-color: rgb(233, 233, 240);
  }
  .ccllPlaying{
    color: rgb(233, 233, 240);
    background-color: rgb(233, 233, 240);
  }
  .cdllPlaying{
    color: rgb(233, 233, 240);
    background-color: rgb(233, 233, 240);
  }
  .allPlaying{
    color: blue;
    background-color: blue;
  }
  .bllPlaying{
    color: rgb(217, 255, 0);
    background-color: yellow;
  }
  .cllPlaying{
    color: rgb(255, 0, 0);
    background-color: red;
  }
  .dllPlaying{
    color: rgb(0, 255, 30);
    background-color: green;
  }
  .uPlaying{
    content: '{#if uPlaying}1{/if}';
  }
  
  .container:has(.calPlaying, .cblPlaying .cclPlaying, .cdlPlaying, .uPlaying) .square:not(.calPlaying, .cblPlaying .cclPlaying, .cdlPlaying, u.uPlaying) {
    color: #7535be;
  }
</style>
