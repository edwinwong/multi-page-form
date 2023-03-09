<script lang="ts">
  import { formData } from './store.js';
  import InputField from './InputField.svelte';

  export let active_step: string;
  
  const handleSubmit = () => {
    console.log('Your form data => ', $formData);
  };
</script>

<form class="form-container" on:submit={handleSubmit}>
  {#if active_step === 'Info'}
    <InputField label='Name' bind:value={$formData.name} />
    <InputField label='Surname' bind:value={$formData.surname} />
    <InputField label='Email' bind:value={$formData.email} />
    <InputField type='password' label='Password' bind:value={$formData.password} />
  {:else if active_step === 'Address'}
    <InputField label='Address' bind:value={$formData.address} />
    <InputField label='City' bind:value={$formData.city} />
    <InputField label='Country' bind:value={$formData.country} />
    <InputField label='Postcode' bind:value={$formData.postcode} />
  {:else if active_step === 'Payment'}
    <InputField label='Account Name' bind:value={$formData.account_name} />
    <InputField label='Card No' bind:value={$formData.card_no} />
  {:else if active_step === 'Confirm'}
    <div class="message">
      <h2>Thank you for choosing us</h2>
      <a href="./submitted"><button class="btn submit">View Submitted Data</button></a>
    </div>
  {/if}
</form>

<style>
  .form-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 350px;
    min-height: 320px;
  }
  .btn {
    color: white;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    display: inline-block;
    width: 100%;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .submit {
    background-color: #44c767;
  }
  .submit:hover {
    background-color: #40d668;
  }
  .message {
    text-align: center;
  }
</style>
