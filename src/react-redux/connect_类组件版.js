import React, { PureComponent } from 'react'
import ctx from './ctx';
import { bindActionCreators } from 'redux'


export default function connect(mapStateToProps, mapDispatchToProps) {
  /** 返回一个高阶组件（HOC） */
  return function (Comp) {
    class Temp extends PureComponent {
      static contextType = ctx;

      constructor(props, context) {
        super(props, context);
        this.store = this.context;
        this.state = {};
        this.handlers = {};
        if(mapStateToProps) { //得到需要传递的状态数据，并监听store的变化
          this.state = mapStateToProps(this.store.getState(), this.props); //初始化状态
          this.unListen = this.store.subscribe(() => { //监听store的变化，适时改变当前的状态
            this.setState(mapStateToProps(this.store.getState(), this.props));
          });
        }
        if(mapDispatchToProps) { //得到需要传递的事件处理函数属性
          let handlers = null;
          if(typeof mapDispatchToProps === 'function') {
            handlers = mapDispatchToProps(this.store.dispatch, this.props);
          }else if(typeof mapDispatchToProps === 'object') {
            handlers = bindActionCreators(mapDispatchToProps, this.store.dispatch);
          }
          this.handlers = handlers;
        }
      }

      componentWillUnmount() {
        this.unListen(); //当前组件被销毁是，取消对store的监听
      }

      render() {
        console.log(`${Temp.displayName} 渲染了`);
        return <Comp {...this.state} {...this.handlers} {...this.props} />
      }
    }

    Temp.displayName = Comp.displayName || Comp.name; //在调试工具中，让Temp的名字与Comp的名字保持一致
    return Temp;
  }
}
