
<template>
      <link href="/src/styles.css" rel="stylesheet">

    <header class="w-full bg-white h-30 rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"/>
      <a href="#" class="flex justify-end gap-4 text-gray-700 ">
          <router-link to="/home">Home</router-link> 
          <router-link to="/login">Login</router-link> 
          <router-link to= "/ricettario">Ricettario</router-link>
            </a>
    </header>


      <div>
        <h1>Benvenuto su Ricettario!</h1>
        <p>Scopri e condividi ricette di cucina.</p>
        <router-link to="/login">Accedi per gustare queste ricette!</router-link>

    
  <aside class="w-72 bg-[#bbbbd4] p-6 border border-[#e0e0f0] rounded-r-xl">
      <a href="#" class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <span>✉️</span> Opzione 3
            </a>
  </aside>    
  </div>
    

  <footer class="w-full bg-white h-30 rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      
      <!-- Logo -->
      <div class="flex items-center gap-2 mb-2 md:mb-0">
        <img src="@/views/assets/logo.jpg" class="h-24" alt="Logo Ricette" />
      </div>
      
      <!-- Info -->
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a class="me-4 md:me-6">Progetto sistemi web | </a>
        </li>
        <li>
          <a class="me-4 md:me-6">Sofia Ricci</a>
        </li>
        <li>
          <a class="me-4 md:me-6">Silvia Baraccani</a>
        </li>
      </ul>
      
    </div>
  </footer>

  </template>  