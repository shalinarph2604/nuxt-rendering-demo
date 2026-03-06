<script setup lang="ts">
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts/1')
</script>

<template>
    <div>
        <h1>CSR Page Example</h1>
        <p>This page is client-side rendered (CSR).</p>
        <p>Tulisan di dalam kotak berikut adalah isi dari JSON Placeholder:</p>
        <div class="data-container">
            <pre>Title: {{ data.title }}</pre>
            <p>Body: {{ data.body }}</p>
        </div>
    </div>
</template>

<style scoped>
.data-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
}
</style>