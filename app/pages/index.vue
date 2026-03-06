<script setup lang="ts">
</script>

<template>
    <div>
        <h1>Home Page</h1>
        <p>Selamat datang di halaman utama Demo Rendering Method Nuxt 3!</p>
        <p>Gunakan link di bawah ini untuk melihat perbedaan antara SSR, ISR, SSG, dan CSR:</p>
        <ul>
            <li><NuxtLink to="/ssr">SSR Page</NuxtLink></li>
            <li><NuxtLink to="/csr">CSR Page</NuxtLink></li>
            <li><NuxtLink to="/isr">ISR Page</NuxtLink></li>
            <li><NuxtLink to="/ssg">SSG Page</NuxtLink></li>
        </ul>
    </div>
</template>