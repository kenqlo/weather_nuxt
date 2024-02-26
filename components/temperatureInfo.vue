<script setup lang="ts">
import { WeatherData } from '@/interfaces';

interface Props {
  weatherData: WeatherData;
}
const props = defineProps<Props>();

const tempMax = props.weatherData.tempMax;
const tempMin = props.weatherData.tempMin;
const temperatures = computed(() => {
    return {
        tmax: tempMax.toFixed(1),
        tmin: tempMin.toFixed(1)
    }
})
</script>

<template>
  <p>最高気温：<span>{{ temperatures.tmax }}</span> ℃　最低気温：<span>{{ temperatures.tmin }}</span> ℃</p>
</template>

<style scoped lang="scss">
p {
    span {
        font-size: 1.5rem;
        font-weight: bold;
    }
}
</style>
