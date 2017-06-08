# componentWillUpdate
`(object nextProps, object nextState)` 在更新发生前被立即调用。你不能在此调用`this.setState()`。

这个状态是在`react`底层已经做完了`state`的比对，准备更新状态的时候，所以你在这里做setState的话，可能会引起不可预料的后果，有可能是无用的，有可能对后面的`setState`有影响，也有可能引起组件内的循环触发。