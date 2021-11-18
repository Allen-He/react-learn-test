const url = 'http://open.duyiedu.com/api';
const appkey = 'Allen_He_1602512631187';

const api = {
  async getAllStusByPagination(page, limit) {
    const path = '/student/findByPage';
    const curUrl = `${url}${path}?appkey=${appkey}&page=${page}&size=${limit}`;
    const data = await fetch(curUrl).then(resp => resp.json()).then(res => res.data);
    return data;
  }
}

export default api;
