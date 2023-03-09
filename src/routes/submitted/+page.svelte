<script lang="ts">
  import { formData } from '../store.js';
  
  const formFields: string[] = [
    'name',
    'surname',
    'email',
    'password',
    'address',
    'city',
    'country',
    'postcode',
    'account_name',
    'card_no'
  ];
  console.log($formData);
  </script>
  
  <main>
    <div class="container">
      <h2>Submitted Form Data</h2>
      <table>
        {#each formFields as field}
        <tr>
          <td>
            <strong>{field}</strong>
          </td>
          <td>
            {$formData[field]}
          </td>
        </tr>
        {/each}
      </table>
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
      padding-top: 50px;
      margin: 0;
    }
    h2 {
      text-align: center;
    }
    .container {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
      padding: 50px 20px;
      text-align: left;
      max-width: 100%;
      width: 350px;
      min-height: 320px;
    }
    </style>