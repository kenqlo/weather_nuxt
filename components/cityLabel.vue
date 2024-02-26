<script setup lang="ts">
interface Props {
  cityName: string;
}
defineProps<Props>();
</script>

<template>
  <span>
    {{ cityName }}<slot>の天気</slot>
  </span>
</template>
