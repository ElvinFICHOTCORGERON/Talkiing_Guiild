<script setup lang="ts">
import type { Attraction } from "~/model/attraction";

const attactionsResponse = await $fetch("/api/attractions");

const attractions = computed<Attraction[]>(() => attactionsResponse ?? []);
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Tutoriials parc</p>
    <ul>
      <li v-for="attraction in attractions" :key="attraction.id">
        {{ attraction.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
