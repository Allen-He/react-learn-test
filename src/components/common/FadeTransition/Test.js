import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FadeTransition from './index'
import { SwitchTransition, TransitionGroup } from 'react-transition-group'

/** 直接使用FadeTransition */
// export default class Test extends Component {
//   state = {
//     visible: true,
//   }
//   render() {
//     return (
//       <div>
//         <FadeTransition appear in={this.state.visible} timeout={3000}>
//           <h2>FadeTransition Component Test</h2>
//         </FadeTransition>
//         <button onClick={() => {
//           this.setState({
//             visible: !this.state.visible,
//           })
//         }}>Toggle</button>
//       </div>
//     )
//   }
// }


/** 配合SwitchTransition组件使用 */
// export default class Test extends Component {
//   state = {
//     visible: true,
//   }
//   render() {
//     return (
//       <div>
//         <SwitchTransition>
//           <FadeTransition appear key={this.state.visible} timeout={3000}>
//             <h2>{this.state.visible ? 'FadeTransition Component Test' : 'Another Content For Test'}</h2>
//           </FadeTransition>
//         </SwitchTransition>
//         <button onClick={() => {
//           this.setState({
//             visible: !this.state.visible,
//           })
//         }}>Toggle</button>
//       </div>
//     )
//   }
// }


/** 配合TransitionGroup组件使用 */
export default class Test extends Component {
  state = {
    dataList: [
      {id: uuidv4(), name: '内容1'},
      {id: uuidv4(), name: '内容2'},
      {id: uuidv4(), name: '内容3'},
    ]
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.dataList.map(it => (
              <FadeTransition appear key={it.id} timeout={3000}>
                <h2>{it.name}<button onClick={() => {
                  this.setState({
                    dataList: this.state.dataList.filter(item => item.id !== it.id),
                  })
                }}>Delete</button></h2>
              </FadeTransition>
            ))
          }
        </TransitionGroup>
        <button onClick={() => {
          this.setState({
            dataList: [...this.state.dataList, {
              id: uuidv4(),
              name: `内容${Math.random().toString(36).slice(-6)}`
            }]
          })
        }}>Add</button>
      </div>
    )
  }
}
