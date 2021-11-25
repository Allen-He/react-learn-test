import React, { useState, useEffect } from 'react'
import api from '../../services/index'
import StudentsSearchBar from '../../components/StudentsSearchBar'
import StudentsTable from '../../components/StudentsTable'
import Pager from '../../components/common/Pager'
import qs from 'query-string'

/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
*/
function getQueryInfo(search) {
  const queryDefault = {
    page: 1,
    limit: 10,
    key: "",
    sex: -1
  };
  let query = qs.parse(search);
  query = Object.assign({}, queryDefault, query);
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return query;
}

/**
 * 获取服务器的响应结果
 * @param {object} 查询条件对象 {page, limit, key, sex}
*/
function useStusResp({page, limit, key, sex}) {
  const [stusResp, setStusResp] = useState({
    cont: 0,
    datas: [],
  });

  useEffect(() => {
    api.searchStudents({page, limit, key, sex}).then(resp => {
      setStusResp(resp);
    });
  }, [key, limit, page, sex]);

  return stusResp;
}

/** 根据新的queryInfo，改变地址 */
function changeLocation(queryInfo, history) {
  const newSearch = qs.stringify(queryInfo);
  history.push('?' + newSearch);
}

export default function StudentsList(props) {
  const queryInfo = getQueryInfo(props.location.search);
  const stusResp = useStusResp(queryInfo);

  return (
    <div>
      <StudentsSearchBar defaultValue={{key: queryInfo.key, sex: queryInfo.sex}}
        onSearch={(curValObj) => {
          const newQuery = Object.assign({}, queryInfo, {
            key: curValObj.key,
            sex: curValObj.sex,
            page: 1
          });
          changeLocation(newQuery, props.history);
        }}
      />
      <StudentsTable stus={stusResp.datas} />
      <Pager current={queryInfo.page} total={stusResp.cont} limit={queryInfo.limit} panelNum={5}
        onPageChange={(tarPage) => {
          const newQuery = {
            ...queryInfo,
            page: tarPage
          }
          changeLocation(newQuery, props.history);
        }}
      />
    </div>
  )
}
