<script setup lang="ts">
import type { City } from "@/interfaces";
import { createCityList } from "@/cityDB";

//都市情報リストをステートとして用意。
useState<Map<number, City>>("cityList", (): Map<number, City> => {
  const cityListInit = createCityList();

  return cityListInit;
});
</script>

<template>
  <header>
    <h1>コンポーザブルサンプル</h1>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
