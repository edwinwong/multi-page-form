import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface data {
  [key: string] : string
};

let defaultData: data = {
  name: '',
  surname: '',
  email: '',
  password: '',
  address: '',
  city: '',
  country: '',
  postcode: '',
  account_name: '',
  card_no: ''
}

if (browser) {
  const data = window.sessionStorage.getItem('sessionFormData');
  if (data) {
    defaultData = JSON.parse(data);
  }
}

export const formData = writable<data>(defaultData);
