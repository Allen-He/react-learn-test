import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

/** TransitionGroup组件 */

export default function Test3() {
  const [dataList, setDataList] = useState([
    {id: uuidv4(), name: '内容1'},
    {id: uuidv4(), name: '内容2'},
    {id: uuidv4(), name: '内容3'}
  ]);

  return (
    <div className="container">
      <div>
        <TransitionGroup appear component={null}>
          {
            dataList.map((it) => (
              <CSSTransition timeout={1000} key={it.id}>
                <li>{it.name}&nbsp;<button onClick={() => {
                  setDataList(dataList.filter(data => data.id !== it.id));
                }}>删除</button></li>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
      <button style={{marginTop: '15px'}} onClick={() => {
        const newName = window.prompt('Please input the new name to show!');
        const newData = { id: uuidv4(), name: newName };
        setDataList([...dataList, newData]);
      }}>添加</button>
    </div>
  )
}
