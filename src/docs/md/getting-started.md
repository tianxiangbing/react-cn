
# 快速入门

## JSFiddle

开始学习 React 最简单的方式是使用如下JSFiddle的 Hello World例子：

*   **[React JSFiddle](http://jsfiddle.net/reactjs/69z2wepo/)**
*   [React JSFiddle without JSX](http://jsfiddle.net/reactjs/5vjqabv3/)

## 初学者教程包 (Starter Kit)

如果不想使用npm可以下载初学者教程包，其中预置了React和ReactDOM。

<div class="buttons-unit downloads">[下载初学者教程包 v15.3.0](/react-15.3.0.zip)</div>

在初学者教程包的根目录，创建一个包含以下内容的 `helloworld.html`。


    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
        <script src="build/react.js"></script>
        <script src="build/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      </head>
      <body>
        <div id="example"></div>
        <script type="text/babel">
          ReactDOM.render(
            <h1>Hello, world!</h1>,
            document.getElementById('example')
          );
        </script>
      </body>
    </html>


在 JavaScript 代码里写着 XML 格式的代码称为 JSX；可以去 [JSX 语法](/react/docs/jsx-in-depth.html) 里学习更多 JSX 相关的知识。为了把 JSX 转成标准的 JavaScript，我们用 `<script type="text/babel">` 标签，然后通过Babel转换成在浏览器中真正执行的内容。

### <a class="anchor" name=""></a>分离文件 [#](#)

你的 React JSX 代码文件可以写在单独的文件里。创建 `src/helloworld.js` 文件，内容如下：


    React.render(
      <h1>Hello, world!</h1>,
      document.getElementById('example')
    );


然后在 `helloworld.html` 引用它：


    <script type="text/babel" src="src/helloworld.js"></script>


请注意，某些浏览器（如，Chrome浏览器）将无法加载该文件，除非它通过HTTP服务。

### <a class="anchor" name=""></a>离线转换 [#](#)

先安装命令行工具（依赖 [npm](http://npmjs.org/)）：


    npm install -g react-tools


然后将你的 `src/helloworld.js` 文件转成标准的 JavaScript:


    jsx --watch src/ build/


一旦你修改了， `build/helloworld.js` 文件会自动生成。


    React.render(
      React.createElement('h1', null, 'Hello, world!'),
      document.getElementById('example')
    );


对照以下内容更新你的 HTML 代码


    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello React!</title>
        <script src="build/react.js"></script>
        <!-- 不需要JSXTransformer! -->
      </head>
      <body>
        <div id="example"></div>
        <script src="build/helloworld.js"></script>
      </body>
    </html>


## 想要遵循 CommonJS 规范?

如果你想在使用 React 时，遵循 [browserify](http://browserify.org/)，[webpack](http://webpack.github.io/) 或者或其它兼容CommonJS的模块系统，只要使用 [`react` npm包](https://www.npmjs.org/package/react) 即可。而且，`jsx` 转换工具可以很轻松的地集成到大部分打包系统里（不仅仅是 CommonJS）。

## 下一步

接着学习更多 [入门教程](/docs/tutorial.html) 和初学者教程包 `examples` 目录下的其它例子。

我们还有一个社区开发者共同建设的 Wiki：[workflows, UI-components, routing, data management etc.](https://github.com/facebook/react/wiki/Complementary-Tools)

祝你好运，欢迎来到 React 的世界。
