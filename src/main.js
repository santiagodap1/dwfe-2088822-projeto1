import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJf-135cNYQkG9CVWxpVNqDr50QvRAVa0",
  authDomain: "projeto1-frontend.firebaseapp.com",
  projectId: "projeto1-frontend",
  storageBucket: "projeto1-frontend.appspot.com",
  messagingSenderId: "380330379600",
  appId: "1:380330379600:web:8d8c8b8edd246404ce8455",
  measurementId: "G-JV0PVD725N"
};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db;

createApp(App).use(store).use(router).mount('#app')
