import PropTypes from 'prop-types'

const Types = {
  FormCompDatas: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })), // 表单组件需要用到的数据源类型
  FormCompChooseDatas: PropTypes.arrayOf(PropTypes.string), //表单组件需要用到的已选中的数据
  children: PropTypes.node, //以默认方式传递的React元素内容
}

export default Types;
