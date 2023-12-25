<script>
  import Board from "./Board.svelte";
  import  isSquareDisabled from "./Board.svelte";
  import getRandomColor from "./Board.svelte";
  import { acLine, cNs } from "./utils.js";
  
  let squares = Array(256).fill('');
  let next = "x";
  $: coloLine = acLine(squares.map(square => square.color));
</script>

<div class="container">
  <Board size={16}>
    <svelte:fragment slot="game">
      {#each squares as square, i}
	  <button
	  class="square"
	  disabled = {square}
	  on:load={() => {
      }}
	  >
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
    color: #6c3636;
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
