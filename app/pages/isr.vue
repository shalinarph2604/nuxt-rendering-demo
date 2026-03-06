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
    <p>Coba refresh halaman ini setelah 60 detik untuk melihat pembaruan waktu.</p>
    <div class="data-container">
      <p>Current time: {{ data?.time }}</p>
    </div>
  </div>
</template>

<style scoped>
.data-container {
    background-color: #e0f7fa;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}
</style>