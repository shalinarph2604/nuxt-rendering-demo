<script setup lang="ts">
  interface TimeResponse {
    time: string
  }

    const { data } = await useFetch<TimeResponse>('/api/time')
</script>

<template>
  <div>
    <h1>ISR Page Example</h1>
    <p>This page uses Incremental Static Regeneration (ISR) with a 60-second cache.</p>
    <p>Current time: {{ data?.time }}</p>
  </div>
</template>