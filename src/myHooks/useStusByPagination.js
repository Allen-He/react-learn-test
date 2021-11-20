import { useState, useEffect } from 'react'
import api from '../services/index'
/**
 * 根据页码curPage和页容量limit获取学生数据，得到一个响应结果
 * 并且，当页码和页容量变化时，将重新获取学生数据
 * @returns {object} stuInfo: xxx, totalNum: xxx
 */
export default function useStusByPagination(curPage, limit) {
  const [resData, setResData] = useState({});

  useEffect(() => {
    (async () => {
      const resData = await api.getAllStusByPagination(curPage, limit);
      setResData({
        stuInfo: resData.findByPage,
        totalNum: resData.cont,
      });
    })();
  }, [curPage, limit]);

  return resData;
}
