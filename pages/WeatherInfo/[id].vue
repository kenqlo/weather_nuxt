<script setup lang="ts">
import type {City} from "@/interfaces";

const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed(
	(): City => {
		const idNo = Number(route.params.id);
		return cityList.value.get(idNo) as City;
	}
);
const asyncData = useWeatherInfoFetcher(selectedCity.value);
const weatherData = asyncData.data;
const pending = asyncData.pending;
</script>

<template>
	<p v-if="pending">データ取得中…</p>
	<section v-else>
		<h2>{{selectedCity.name}}の天気</h2>
		<p style="display: flex; align-items: center;"><img v-bind:src="weatherData.icon" alt="" />{{weatherData.description}}</p>
		<p>最高気温：{{ weatherData.tempMax }}℃　最低気温：{{ weatherData.tempMin }}℃</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
