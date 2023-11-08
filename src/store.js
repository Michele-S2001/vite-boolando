import { reactive } from 'vue';
import productsJson from './db.json'

export const store = reactive({
  // array di oggetti
  products: productsJson.products
})