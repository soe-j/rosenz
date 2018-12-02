# rosenz
路線図作ってみる

## 実行方法
- `config/ekispert.js` に以下の内容を記述
~~~
var ekispertConfig = {
  "url": "[駅すぱあとWebサービスEndpoint]",
  "key": "[駅すぱあとWebサービスKey]"
};
if (typeof(config) == 'undefined') {
  config = {}
}
config.ekispert = ekispertConfig;
~~~
