import React, { Component } from 'react'
import SelectMenu from './SelectMenu';

export default class FormTest extends Component {
  state = {
    datas: [
      {value: 'reading', text: '阅读'},
      {value: 'movies', text: '观影'},
      {value: 'learning', text: '学习'}
    ],
    value: '',
  }

  changeHandle = (newVal) => {
    this.setState({ value: newVal });
  }

  render() {
    return (
      <div>
        <SelectMenu 
          datas={this.state.datas}
          value={this.state.value}
          name='likeBest'
          onChange={this.changeHandle}
        />
      </div>
    )
  }
}



// import React, { Component } from 'react'
// import RadioGroup from './common/RadioGroup';

// export default class FormTest extends Component {
//   state = {
//     datas: [
//       {value: 'reading', text: '阅读'},
//       {value: 'movies', text: '观影'},
//       {value: 'learning', text: '学习'}
//     ],
//     value: 'reading',
//   }

//   changeHandle = (newVal) => {
//     this.setState({ value: newVal });
//   }

//   render() {
//     return (
//       <div>
//         <RadioGroup 
//           datas={this.state.datas}
//           value={this.state.value}
//           name='likeBest'
//           onChange={this.changeHandle}
//         />
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import CheckboxGroup from './common/CheckboxGroup'

// export default class FormTest extends Component {
//   state = {
//     datas: [
//       {value: 'reading', text: '阅读'},
//       {value: 'movies', text: '观影'},
//       {value: 'learning', text: '学习'}
//     ],
//     chooseDatas: ['reading'],
//   }

//   changeHandle = (newChooseDatas) => {
//     this.setState({ chooseDatas: newChooseDatas });
//   }

//   render() {
//     return (
//       <div>
//         <CheckboxGroup 
//           datas={this.state.datas}
//           chooseDatas={this.state.chooseDatas}
//           name='hobbies'
//           onChange={this.changeHandle}
//         />
//       </div>
//     )
//   }
// }
