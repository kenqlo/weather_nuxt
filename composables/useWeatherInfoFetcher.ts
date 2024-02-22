import type {City} from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
	const config = useRuntimeConfig();
	const asyncData = useLazyAsyncData(
		`useWeatherInfoFetcher-${city.id}`,
		(): Promise<any> => {
			// const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
			const params:{
				lang: string;
				q: string;
				units: string;
				appid: string;
			} =
			{
				lang: "ja",
				q: city.q,
				//温度単位　摂氏：metric、華氏：imperial
				units: "metric",
				//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
				// appId: "xxxxxx"
				appid: config.public.weathermapAppid
			}
			const queryParams = new URLSearchParams(params);
			// const urlFull = `${weatherInfoUrl}?${queryParams}`;
			const urlFull = `${config.public.weatherInfoUrl}?${queryParams}`;
			console.log('Fetching to openweathermap.org...');
			const response = $fetch(urlFull);
			// console.log(response);
			return response;
		},
		{
			transform: (data): any => {
				const weatherArray = data.weather;
				const weather = weatherArray[0];
				// return weather.description;
				return {
					description: weather.description,
					icon: `${config.public.weatherIconUrl}${weather.icon}.png`,
					tempMax: data.main.temp_max,
					tempMin: data.main.temp_min
				}
			}
		}
	);
	return asyncData;
};
