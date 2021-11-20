/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
/**
 * 组件首次渲染后，启动一个Interval计时器
 * 组件卸载后，清除该计时器
 */
export default function useTimer(func, intervalTime) {
  useEffect(() => {
    const timer = setInterval(() => {
      func();
    }, intervalTime);
    return () => {
      clearInterval(timer);
    }
  }, []);
}
