<template>
  <div>
    <h1>Nuxt Image Test</h1>
    <NuxtImg src="/cat.jpg" width="1024" quality="1" format="webp" />
<NuxtImg provider="cloudflare" src="/cat.jpg" width="1024" quality="1" format="webp" />

   
    <hr>
    Orig<br>
        <img src="/cat.jpg" width="1024"  />
  </div>
</template>
