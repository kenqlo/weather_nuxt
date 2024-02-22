import type { City } from "@/interfaces";
import cityList from "@/city-list.json";

//都市情報をJSONファイルから取得してデータセットを作成
export function createCityList(): Map<number, City> {
  const cityListInit = new Map<number, City>();

  cityList.forEach((city) => {
    cityListInit.set(city.id, {
      id: city.id,
      name: city.name,
      q: city.q,
    });
  });

  return cityListInit;
}
