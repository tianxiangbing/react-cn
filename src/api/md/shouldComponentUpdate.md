# shouldComponentUpdate
`(object nextProps, object nextState): boolean` 当组件决定任何改变是否要更新到DOM时被调用。作为一个优化实现比较`this.props` 和 `nextProps` 、`this.state` 和 `nextState` ，如果React应该跳过更新，返回false。

这个事件的用处是我们可以控制react的更新频率，很多时候，并不是任何的state改变，我们都需要对整个组件进行`render`的，虽然`react`提供了很好的虚拟dom对比机制，但我们仍然可以在这里做进一步的优化。