
<template>

<link href="/src/styles.css" rel="stylesheet">

<header class="w-full h-16 bg-[#bbbbd4] p-6 border border-[#e0e0f0] rounded-r-xl">
  <a href="#" class="flex gap-2 px-3 py-2 text-gray-700">
      <router-link to="/home">Home</router-link> 
      <router-link to="/login">Login</router-link> 
      <router-link to= "/ricettario">Ricettario</router-link>
        </a>
</header>

  <div>
    <h2>Login</h2>
    <input v-model="username" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Accedi</button>
    <p>Se non hai effettuato l'accesso, registrati <span @click="$router.push('/register')" class="link">qui</span>!</p>
  </div>
</template>
<script>
export default {
  data() {
    return { username: '', password: '' };
  },
  methods: {
    async login() {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.$router.push('/ricettario');
      } else {
        alert('Login fallito');
      }
    }
  }
}
</script>
<style>.link { color: blue; cursor: pointer; text-decoration: underline; }</style>



