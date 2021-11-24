import React, { Component } from 'react'

export default class FormTestOriginal extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    chooseLoves: [],
    loves: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" },
      { value: "music", text: "音乐" },
      { value: "other", text: "其他" },
    ],
    city: "beijing"
  }

  changeHandle = (e) => {
    let { value: val, name: stateName } = e.target;
    if(e.target.type === 'checkbox') {
      if(e.target.checked) {
        val = [...this.state.chooseLoves, val];
      }else {
        val = this.state.chooseLoves.filter(it => it !== val);
      }
    }
    this.setState({ [stateName]: val });
  }

  getLovesCheckBoxes() {
    const res = this.state.loves.map(item => (
      <label key={item.text}>
        <input type="checkbox" name="chooseLoves" value={item.value}
          checked={this.state.chooseLoves.includes(item.value)} 
          onChange={this.changeHandle}
        />{item.text}
      </label>
    ));
    return res;
  }

  render() {
    const lovesCheckboxes = this.getLovesCheckBoxes();

    return (
      <div>
        <p>
          <label>账号：<input type="text" name="loginId" value={this.state.loginId} onChange={this.changeHandle} /></label>
        </p>
        <p>
          <label>密码：<input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.changeHandle} /></label>
        </p>
        <p>
          <label>地址：
            <select name="city" onChange={this.changeHandle}>
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="guangzhou">广州</option>
              <option value="shenzhen">深圳</option>
              <option value="chengdu">成都</option>
            </select>
          </label>
        </p>
        <p>
          <label>性别：
            <label><input type="radio" checked={this.state.sex === "male"} name="sex" value="male" onChange={this.changeHandle} />男</label>
            <label><input type="radio" checked={this.state.sex === "female"} name="sex" value="female" onChange={this.changeHandle} />女</label>
          </label>
        </p>
        <p>
          <label>爱好：
            {lovesCheckboxes}
          </label>
        </p>

        <button onClick={() => { console.log(this.state) }}>点我</button>
      </div>
    )
  }
}
