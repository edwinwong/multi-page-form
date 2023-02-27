<script lang="ts">
  export let
    value: string,
    label: string,
    type: string = 'text';

  const id = label;

  function typeAction(node: HTMLInputElement): void {
    node.type = type;
  }
</script>

<p class="form-control">
  {#if label}
    <label class="label" for={label}>{label}:</label>
  {/if}
  <input use:typeAction class="input" {id} bind:value />
</p>

<style>
  .form-control {
    margin: 0.5rem 0;
    text-align: left;
  }
  .input {
    width: 95%;
    display: block;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
    border-width: 1px;
    border-radius: 0.25rem;
  }
</style>
