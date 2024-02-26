<script setup lang="ts">
import type { City } from "@/interfaces";

// // Provide/Inject ver.
// const cityList = inject("cityList") as Map<number, City>;

// useState ver.
//都市情報リストをステートから取得。
const cityList = useState<Map<number, City>>("cityList");

// Pinia ver.
</script>

<template>
  <section>
    <h2>都市リスト</h2>
    <ul>
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'WeatherInfo-id', params: { id: id } }">
          <CityLabel v-bind:cityName="city.name"/>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
