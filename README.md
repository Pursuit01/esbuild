# esbuild

### 1.1 安装esbuild

```js
npm i -S esbuild
```

### 1.2 查看是否安装成功

```js
.\node_modules\.bin\esbuild --version
```

### 体验一下

#### 1.3 安装react和react-dom

```js
npm i react react-dom
```

#### 1.4 创建app.jsx文件

```
touch app.jsx
```

```js
import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
```

#### 1.5 执行打包命令

```js
.\node_modules\.bin\esbuild app.jsx --bundle --outfile=out.js
```

此时可以看到根目录下输出了`out.js`文件，执行它：

```js
node ./out.js
```

#### 1.6 输出结果

`<h1>Hello,World!</h1>`

### 2.1 使用`npm script`运行打包命令

```js
{
  "scripts": {
    "build": "esbuild app.jsx --bundle --outfile=out.js"
  }
}
```

### 2.2 run

```js
npm run build
```
