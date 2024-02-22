# weather_nuxt

## お天気アプリ

- Nuxt.js
- Composition API
- OpenWeatherMap API

## 使い方

このプロジェクトをローカルで実行するには、以下の手順を実行してください。

1. プロジェクトのクローンを作成します。

2. プロジェクトのディレクトリに移動します。

3. アプリケーションの依存関係をインストールします。

    npm install

4. 環境変数を設定します。

    https://openweathermap.org/でAPIキーを取得して、.envにNUXT_PUBLIC_WEATHERMAP_APPIDとして設定

5. アプリケーションを実行します。

    npm run dev

    // このコマンドを実行すると、開発サーバーが起動し、アプリケーションがローカルで実行されます。

    npm run build

    // このコマンドを実行すると、本番環境用のビルドが作成されます。

    node .output/server/index.mjs

    // このコマンドを実行すると、サーバーが起動し、アプリケーションがローカルで実行されます。

## お天気アプリの機能

- 各地のお天気を表示する
- お天気の詳細を表示する

## お天気アプリの例

- [お天気アプリ](https://kenqlo.netlify.app/)

## ライセンス

&copy; 2024 [Ken Kurosaki](https://github.com/quinpallet).
This project is [MIT](https://github.com/quinpallet/django_study/blob/master/LICENSE) licensed.