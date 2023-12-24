<script>
  import Board from "./Board.svelte";
  import { getColorLine, lineas } from "./utils.js";
  
  let squares = Array(256).fill("");
  let next = "x";
  $: colorLine = getColorLine(squares);
</script>

<div class="container">
  <Board size={16}>
    <svelte:fragment slot="game">
      {#each squares as square, i}
        <button class="square" disabled={square}>
          {square}
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
    color: #222;
    opacity: 1;
    font-size: 1em;
    padding: 10%;
  }

  div {
    width: 100%;
    height: 100%;
  }

  .container:has(.starting) .square:not(.starting) {
    color: #7535be;
  }
</style>
