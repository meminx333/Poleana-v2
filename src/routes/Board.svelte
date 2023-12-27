<script>
 /** @type {{numbers: number, number1: number}} */
  let diceResults;
  export let size;
  export let m = { x: 0, y: 0 };
  async function rollDice() {
    const response = await fetch("/roll");
    diceResults = await response.json();
  } 
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })} > 
  <div class="board" style="--size: {size}">
    <slot name="game" />
  </div>
  <table>
    <tr>
      <th>Position</th>
      <th>Iniciar</th>
      <th colspan="2"><button on:click={rollDice}>Roll the dice</button></th>
    </tr>
    <tr>
      <td>{m.x} x {m.y}</td>
      <td><slot name="controls" /></td>
      <td>  {#if diceResults}
      {diceResults.numbers}
      {/if}</td>
      <td>  {#if diceResults}
       {diceResults.number1}
        {/if}</td>
    </tr>
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    grid-template-rows: repeat(var(--size), 1fr);
    height: 100%;
    max-height: 200em;
    aspect-ratio: 1;
    background: rgb(191, 65, 65);
    gap: 1px;
    padding: 0.2em;
    border-radius: 0.5em;
    filter: drop-shadow(0.1em 0.1em 0.1em rgba(232, 209, 209, 0.3));
  }
  div {
    width: 100%;
    height: 100%;
  }
  table {
    width: 100%;
    text-align: center;
  }
  th, td, tr {
    padding: 5px;
    text-align: center;
  }
</style>

