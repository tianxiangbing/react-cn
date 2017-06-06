# getInitialState
es5时的初始化state时的方法，在es6语法中，state的初始化在constructor构造函数中完成
```js
var LikeButton = React.createClass({
  getInitialState: function() {
    return {text: '我是一个state'};
  },
  render: function() {
    return (
      <p >
        {this.state.text}
      </p>
    );
  }
});
```
这里建议使用`es6`的语法，在`es5`版本中的`createClass`有做过特殊的处理`this`,所以`this`永远是指向的当前组件，但`es6`中并不这样做，更符合es的规范。
```js
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={title:'我是es6的state初始化'};
  }
  render(){
      return (
          <div>{this.state.title}</div>
      )
  }
}
```