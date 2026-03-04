<script setup lang="ts">
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts/1')
</script>

<template>
    <div>
        <h1>SSR Page Example</h1>
        <p>Secara default, Nuxt 3 adalah SSR (Server Side Rendering).</p>
        <p>Post data: {{ data }}</p>
    </div>
</template>