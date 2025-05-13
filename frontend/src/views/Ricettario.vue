
<template>
  <div>
    <h1>Ricettario</h1>
    <p @click="$router.push('/login')" class="link">Per visualizzare le ricette devi fare accesso o registrarti</p>
  </div>
</template>
<style>.link { color: blue; cursor: pointer; text-decoration: underline; }</style>
