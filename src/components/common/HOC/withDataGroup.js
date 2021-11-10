import React, { Component } from 'react'
import Types from '../../../utils/commonTypes'

/** 高阶组件（HOC）：将公用的表单组件所共有的“遍历datas批量渲染”功能抽离出来复用 */
export default function withDataGroup(Comp) {
  return class dataGroupWrap extends Component {
    static defaultProps = {
      datas: [],
    }

    static propTypes = {
      datas: Types.FormCompDatas.isRequired,
    }

    render() {
      const group = this.props.datas.map((it, i) => <Comp key={i} info={it} {...this.props} />)
      return (
        <>
          {group}
        </>
      )
    }
  }
}
