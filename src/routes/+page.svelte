<script lang="ts">
  import type { SvelteComponent } from 'svelte/types/runtime/internal/Component';
  import { formData } from './store.js';
  import { browser } from '$app/environment';
  import Form from './Form.svelte';
  import ProgressBar from './ProgressBar.svelte';

  let steps = ['Info', 'Address', 'Payment', 'Confirm'],
    currentActive = 1,
    progressBar: SvelteComponent & { handleProgress: (arg: number) => void };

  const handleProgress = (stepIncrement: number) => {
    if (browser) {
     window.sessionStorage.setItem('sessionFormData', JSON.stringify($formData));
   }
    progressBar.handleProgress(stepIncrement);
  };
</script>

<main>
  <div class="container">
    <ProgressBar {steps} bind:currentActive bind:this={progressBar} />
    <Form active_step={steps[currentActive - 1]} />
    <div class="step-button">
      <button class="btn" on:click={() => handleProgress(-1)} disabled={currentActive === 1}
        >Prev
      </button>
      <button
        class="btn"
        on:click={() => handleProgress(+1)}
        disabled={currentActive === steps.length}
        >Next
      </button>
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
  }
  main {
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  .container {
    padding-top: 50px;
  }
  .btn {
    background-color: #3498db;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }
  .btn:hover {
    background-color: #3aa3e9;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn:focus {
    outline: 0;
  }
  .btn:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  .step-button {
    margin-top: 1rem;
    text-align: center;
  }
</style>
