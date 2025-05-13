
<template>

<link href="/src/styles.css" rel="stylesheet">

<header class="w-full h-16 bg-[#bbbbd4] p-6 border border-[#e0e0f0] rounded-r-xl">
  <a href="#" class="flex gap-2 px-3 py-2 text-gray-700 ">
      <router-link to="/home">Home</router-link> 
      <router-link to="/login">Login</router-link> 
      <router-link to= "/ricettario">Ricettario</router-link>
        </a>
</header>

  <div>
    <h2>Registrazione</h2>
    <input v-model="name" placeholder="Nome">
    <input v-model="surname" placeholder="Cognome">
    <input v-model="email" placeholder="Email">
    <input v-model="username" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="register">Registrati</button>
  </div>
</template>
<script>
export default {
  data() {
    return { name: '', surname: '', email: '', username: '', password: '' };
  },
  methods: {
    async register() {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.$data)
      });
      const data = await res.json();
      if (data.success) this.$router.push('/login');
      else alert('Registrazione fallita');
    }
  }
}
</script>
