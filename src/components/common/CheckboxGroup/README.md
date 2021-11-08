# 多选框组件（根据传入的属性，批量生成一组多选框）

## 属性
1. `datas` 数组 数组的每一项为对象 用来批量生成多选框元素
```jsx
const datas = [
  {value: 'reading', text: '阅读'},
  {value: 'movies', text: '观影'},
  {value: 'learning', text: '学习'}
]
```
2. `chooseDatas` 数组 存放已选中的数据的value
```jsx
const chooseDatas = ['reading']
```
3. `name` 字符串 定义当前表单控件的name属性（用于表单数据获取和提交）
```jsx
const name = 'hobbies'
```

## 事件
1. `onChange` 自定义事件名 当多选框被选择时触发
