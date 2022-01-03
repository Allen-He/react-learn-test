import React, { useContext, useState, useEffect } from 'react'
import ctx from './ctx';
import { bindActionCreators } from 'redux'

/** 浅比较：两个对象是否相等 */
function isEqual(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

export default function connect(mapStateToProps, mapDispatchToProps) {
  /** 返回一个高阶组件（HOC） */
  return function (Comp) {
    function Temp(props) {
      const store = useContext(ctx);
      const [state, setState] = useState(mapStateToProps(store.getState(), props));

      useEffect(() => {
        return store.subscribe(() => {
          const newSate = mapStateToProps && mapStateToProps(store.getState());
          setState((prevState) => {
            if(isEqual(prevState, newSate)) {
              return prevState;
            }
            return newSate;
          })
        })
      }, [store]);

      let handlers = {};
      if(mapDispatchToProps) {
        if(typeof mapDispatchToProps === 'function') {
          handlers = mapDispatchToProps(store.dispatch, props);
        }else if(typeof mapDispatchToProps === 'object') {
          handlers = bindActionCreators(mapDispatchToProps, store.dispatch)
        }
      }

      console.log(`${Temp.displayName} 渲染了`, state);
      return <Comp {...state} {...handlers} {...props} />
    }

    Temp.displayName = Comp.displayName || Comp.name; //在调试工具中，让Temp的名字与Comp的名字保持一致
    return Temp;
  }
}
