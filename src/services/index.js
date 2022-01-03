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
   * 如果传递了key属性（key有值），则按照关键字和性别进行搜索
   * 如果key没有值，则对所有学生进行分页
   * @param {object} 查询条件-对象
   * @returns {object} {cont: ..., datas: [{...}, {...}, ...]}
   */
  async searchStudents({ page = 1, limit = 10, key = "", sex = -1 } = {}) {
    if (key) { //按关键词搜索
      const path = '/student/searchStudent';
      const resp = await fetch(`${url}${path}?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
        .then(resp => resp.json()).then(resp => resp.data);
      resp.datas = resp.searchList;
      delete resp.searchList;
      return resp;
    } else {//忽略性别，查询全部
      const resp = await api.getAllStusByPagination(page, limit);
      resp.datas = resp.findByPage;
      delete resp.findByPage;
      return resp;
    }
  }
}

export default api;
