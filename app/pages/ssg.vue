<script setup lang="ts">
    const message = "This page is statically generated at build time (SSG)."
</script>

<template>
    <div>
        <h1>SSG Page Example</h1>
        <p>Tulisan di dalam kotak berikut merupakan data yang dimunculkan saat build time:</p>
        <div class="data-container">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<style scoped>
.data-container {
    background-color: #f9fbe7;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}
</style>