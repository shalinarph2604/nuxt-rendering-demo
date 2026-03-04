<script setup lang="ts">
    const { data } = await useFetch('https://worldtimeapi.org/api/ip')
</script>

<template>
  <div>
    <h1>ISR Page Example</h1>
    <p>This page uses Incremental Static Regeneration (ISR) with a 60-second cache.</p>
    <p>Current time: {{ data }}</p>
  </div>
</template>