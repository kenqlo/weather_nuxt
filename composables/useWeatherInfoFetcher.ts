import type {City, WeatherData} from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
	const config = useRuntimeConfig();
	const asyncData = useLazyAsyncData(
		`useWeatherInfoFetcher-${city.id}`,
		(): Promise<any> => {
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
			const urlFull = `${config.public.weatherInfoUrl}?${queryParams}`;
			console.log('Fetching to openweathermap.org...');
			const response = $fetch(urlFull);

			return response;
		},
		{
			transform: (data): WeatherData => {
				const weatherArray = data.weather;
				const weather = weatherArray[0];
				const weatherData: WeatherData = {
					description: weather.description as string,
					icon: `${config.public.weatherIconUrl}${weather.icon as string}.png`,
					tempMax: data.main.temp_max as number,
					tempMin: data.main.temp_min as number
				}

				return weatherData;
			}
		}
	);
	return asyncData;
};
