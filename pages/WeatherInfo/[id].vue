<script setup lang="ts">
import type {City, WeatherData} from "@/interfaces";

const route = useRoute();
// const cityList = inject("cityList") as Map<number, City>; // Provide/Inject ver.
const cityList = useState<Map<number, City>>("cityList"); // useState ver.
const selectedCity = computed(
	(): City => {
		const idNo = Number(route.params.id);
		// return cityList.get(idNo) as City; // Provide/Inject ver.
		return cityList.value.get(idNo) as City; // useState ver.
	}
);
const asyncData = useWeatherInfoFetcher(selectedCity.value);
const weatherData: Ref<WeatherData | null> = asyncData.data;
const pending = asyncData.pending;
</script>

<template>
	<p v-if="pending">データ取得中…</p>
	<section v-else>
		<h2>
			<CityLabel v-bind:cityName="selectedCity.name"><span style="font-size: 0.75em;">の現在の天気</span></CityLabel>
		</h2>
		<template v-if="weatherData">
			<WeatherInfo v-bind:weatherData="weatherData" />
			<TemperatureInfo v-bind:weatherData="weatherData" />
		</template>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
