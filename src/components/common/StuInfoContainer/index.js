import React, { useState, useEffect } from 'react'
import StuInfoList from './components/StuInfoList'
import Pager from '../common/Pager'
import api from '../../services/index'

export default function StuInfoContainer() {
  const [stuInfo, setStuInfo] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [panelNum] = useState(5);

  useEffect(() => {
    (async () => {
      const resData = await api.getAllStusByPagination(curPage, limit);
      setStuInfo(resData.findByPage);
      setTotalNum(resData.cont);
    })();
  }, [curPage, limit]);

  return (
    <div>
      <StuInfoList stuInfoArr={stuInfo} />
      <Pager current={curPage} total={totalNum} limit={limit} panelNum={panelNum}
        onPageChange={(tarPage) => {setCurPage(tarPage)}}
      />
      <div style={{marginTop: 15}}>
        <p><label>每页的数据量：<input type="number" value={limit}
          onChange={(e) => {
            const {value} = e.target;
            if(value > 0) {
              setLimit(value);
            }
          }}
        /></label></p>
        <p><label>数据总量：<input disabled type="number" value={totalNum}/></label></p>
      </div>
    </div>
  )
}
