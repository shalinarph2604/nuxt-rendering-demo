<script setup lang="ts">
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts/1')
</script>

<template>
    <div>
        <h1>CSR Page Example</h1>
        <p>This page is client-side rendered (CSR).</p>
    </div>
</template>