# componentWillUnmount
在组件被卸载和摧毁前被立即调用。清理应该放在这里。

比如说我在组件的加载时写了个`setInterval`定时器，在路由`router`跳转后，我们应该要`clearInterval`这个定时器，不然是很耗性能的，包括我们的全局事件绑定，都需要在这里取消。