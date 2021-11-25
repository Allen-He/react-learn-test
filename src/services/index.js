const url = 'http://open.duyiedu.com/api';
const appkey = 'Allen_He_1602512631187'; 
// const appkey = 'demo13_1545210570249';

const api = {
  async getAllStusByPagination(page, limit) {
    const path = '/student/findByPage';
    const curUrl = `${url}${path}?appkey=${appkey}&page=${page}&size=${limit}`;
    const data = await fetch(curUrl).then(resp => resp.json()).then(res => res.data);
    return data;
  },
  /**
   * 由于相关接口存在一定问题，故searchStudents方法的逻辑修改为如下：
   * 1. 如果传递了key属性（key有值），则按照关键字和性别进行搜索
   * 2. 如果key没有值，则对所有学生进行分页
   * @param {*} param
   * @returns {object} {cont: 15, datas: [{xxx}, {xxx}]}
  */
  async searchStudents({ page = 1, limit = 10, key = '', sex = -1 } = {}) {
    const path = '/student/searchStudent';
    const curUrl = `${url}${path}?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`;
    let data = null;
    if(key) {
      data = await fetch(curUrl).then(resp => resp.json()).then(resp => resp.data);
      data.datas = data.searchList;
      delete data.searchList;
    }else {
      data = await this.getAllStusByPagination(page, limit);
      data.datas = data.findByPage;
      delete data.findByPage;
    }
    return data;
  }
}

export default api;
