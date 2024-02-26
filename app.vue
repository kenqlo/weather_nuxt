<script setup lang="ts">
import type { City } from "@/interfaces";
import { createCityList } from "@/cityDB";

// // Provide/Inject ver.
// const cityList = new Map<number, City>();
// const cityDBList = createCityList();
// cityDBList.forEach(data => {
//   cityList.set(data.id, data);
// });
// provide("cityList", cityList);

// useState ver.
//都市情報リストをステートとして用意。
useState<Map<number, City>>("cityList", (): Map<number, City> => {
  const cityListInit = createCityList();

  return cityListInit;
});
</script>

<template>
  <header>
    <h1>各地のお天気</h1>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
