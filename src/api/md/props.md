# props
组件的属性，通常用来和其他组件的通信，react推荐凡是组件通信数据都是通过props。他与state的区别在于，state是通过setState来更新的，props是通过组件的生命周期来更新的，这意味着，组件生命周期不发生变化，props是不会变的。
```js
componentWillReceiveProps(newProps) {
    if (newProps.isShow && !this.state.isShow) {
      this.setState({ isShow: true });
    } else if (!newProps.isShow && this.state.isShow) {
      this.setState({ isShow: false });
    }
  }
```
这是我在制作[x-alert](https://github.com/react-plugin/x-alert)插件时的代码，他是把组件调用者的props与组件本身的`state`相结合的例子。