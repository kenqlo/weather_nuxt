import type { City } from "@/interfaces";
// import cityList from "@/city-list.json";

const cityList = [
  {
      "id": 1853909,
      "name": "大阪",
      "q": "Osaka"
  },
  {
      "id": 1850144,
      "name": "東京",
      "q": "Tokyo"
  },
  {
      "id": 1859171,
      "name": "神戸",
      "q": "Kobe"
  },
  {
      "id": 1862627,
      "name": "姫路",
      "q": "Himeji"
  },
  {
      "id": 1855431,
      "name": "新潟",
      "q": "Niigata"
  },
  {
      "id": 2127436,
      "name": "横浜",
      "q": "Yokohama"
  }
];

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
