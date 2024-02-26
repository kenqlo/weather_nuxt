<script setup lang="ts">
import { WeatherData } from '@/interfaces';

interface Props {
  weatherData: WeatherData;
}
defineProps<Props>();
</script>

<template>
  <p><img v-bind:src="weatherData.icon" v-bind:alt="weatherData.description" />{{weatherData.description}}</p>
</template>

<style scoped lang="scss">
p {
    display: flex;
    align-items: center;
    img {
        width: 50px;
        height: 50px;
    }
}
</style>
