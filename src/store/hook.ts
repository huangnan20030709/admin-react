import { useSelector as useReactReduxSelector } from "react-redux";

import { RootState } from "./index";

/**
 * 一个容器useSelector，用来统一添加类型
 * @param selector 选择器
 * @returns
 */
export function useSelector<T extends keyof RootState>(selector: (val: RootState) => RootState[T]) {
  return useReactReduxSelector(selector);
}
