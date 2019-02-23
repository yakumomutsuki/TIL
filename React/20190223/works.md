# webpack-dev-serverについて

- WebサーバはApacheを使っており、例えば `https://google.co.jp` というドメインに対して、新たに `https:google.co.jp/hoge_a` というページを作りたい
- 脱jQueryしたいのでSPAするぞ
- Reactで動かせるいい感じの構成にしてみよう

``` 構成はこんな感じが望ましい
root
 └─ hoge_a
      ├─ src  ── main.js
      ├─ dist ── bundle.js
      ├─ index.html / index.php
      └─ .htaccess 
```
`index.html / index.php` にて、`build.js` をインクルードするのが今回の狙い。
index.* もバンドルするのではなく、あえてそこは分けます。

# webpackの構成
```js
const path = require('path')

module.exports = {
    // entry point
    entry: './src/main.jsx',

    // output path
    // default directory probably "dist"
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                options: {
                    presets: ['react']
                }
            }
        ]
    }
};
```

やっていてつまづいたのが、webpack-dev-serverを設定したときに `bundle.js` がどこに行ったのか分からなかった...
`output` と記載されている箇所に、`bundle.js` を出力するパスを設定するようです。
この場合、webpack-dev-serverのデフォルトのポート番号は8080のため、以下のようにドメイン、ディレクトリパスを指定しないといけません。

```html
<script src="http://localhost:8080/dist/bundle.js"></script>
```

# package.json のscriptに登録する

```
  "scripts": {
    "dev" : "webpack-dev-server --hot"
  }
  ```
上記のように記載します。 `webpack-dev-server` とは、npm経由でインストールしてきたモジュールであり、node_module/.bin 配下にシェルがあります。  
`npm run` + `dev` というコマンドを組み合わせ => `npm run dev` と実行することにより、`webpack-dev-server` に　`--hot` というオプション引数が与えられて、実行されます。

以下は参考にしました。
https://dackdive.hateblo.jp/entry/2016/05/07/183335
