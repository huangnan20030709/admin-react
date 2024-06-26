import { createSlice } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { iTabItem } from "./type";

interface AppStoreSliceState {
  multiTab: boolean;
  expandMenu: boolean;
  tabList: iTabItem[];
}

const initialState: AppStoreSliceState = {
  multiTab: localStorage.getItem("multiTab") === "on" ? true : false,
  expandMenu: localStorage.getItem("expandMenu") === "on" ? true : false,
  tabList: [],
};

export const appStoreSlice = createSlice({
  name: "appStoreSlice",
  initialState,
  reducers: {
    // 开启多标签页
    setMultiTab(state: AppStoreSliceState, action) {
      state.multiTab = action.payload;

      if (action.payload) {
        localStorage.setItem("multiTab", "on");
      } else {
        localStorage.setItem("multiTab", "off");
      }
    },
    // 展开菜单栏
    setExpandMenu(state: AppStoreSliceState, action) {
      state.expandMenu = action.payload;

      if (action.payload) {
        localStorage.setItem("expandMenu", "on");
      } else {
        localStorage.setItem("expandMenu", "off");
      }
    },
    // 监听navigate后是否要添加tab还是切换高亮显示tab的方法
    navigateEffectTab(
      state: AppStoreSliceState,
      action: { type: string; payload: { path: string; label: string; isOnShow: boolean } },
    ) {
      // 已做，点击已有tab时，切换显示，而不是新添加tab
      let findIndex = state.tabList.findIndex(item => {
        return item.path === action.payload.path;
      });

      if (findIndex !== -1) {
        state.tabList = state.tabList.map((item, index) => {
          return { ...item, isOnShow: index === findIndex ? true : false };
        });
      } else {
        state.tabList = [
          ...state.tabList.map(item => {
            return { ...item, isOnShow: false };
          }),
          action.payload,
        ];
      }
    },
    // 点击标签的方法
    deleteTab(
      state: AppStoreSliceState,
      action: { type: string; payload: { path: string; navigate: NavigateFunction } },
    ) {
      let length = state.tabList.length;

      let findIndex = state.tabList.findIndex(item => {
        return item.path === action.payload.path;
      });

      if (findIndex === length - 1) {
        // 当删除的是最后一项时,删除最后一项，跳转显示倒数第二项
        let arr = state.tabList.reduce((preArr, curItem, index) => {
          if (index === length - 2) {
            preArr.push({ ...curItem, isOnShow: true });
            action.payload.navigate(curItem.path);
            return preArr;
          }

          if (index === length - 1) return preArr;

          preArr.push(curItem);
          return preArr;
        }, []);

        state.tabList = arr;
      } else {
        // 当删除的不是最后一项时,删除这一项，然后还是显示这一项的索引,也就是改下一个索引元素的isOnShow属性
        let arr = state.tabList.reduce((preArr, curItem, index) => {
          if (index === findIndex) return preArr;

          if (index === findIndex + 1) {
            preArr.push({ ...curItem, isOnShow: true });
            action.payload.navigate(curItem.path);
            return preArr;
          }

          preArr.push(curItem);
          return preArr;
        }, []);
        state.tabList = arr;
      }

      state;
    },
    // 右键tab关闭其他标签的方法
    closeOhterTab(state: AppStoreSliceState, action: { type: string; payload: number }) {
      state.tabList = [];
    },
    // 右键tab关闭左侧标签的方法
    closeLeftTab(state: AppStoreSliceState, action) {
      state.tabList = state.tabList.slice(action.payload);
    },
    // 右键tab关闭右侧标签的方法
    closeRightTab(state: AppStoreSliceState, action) {
      let item = state.tabList[action.payload.index];
      state.tabList = state.tabList.slice(0, action.payload.index);
      action.payload.navigate(item.path);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMultiTab,
  setExpandMenu,
  navigateEffectTab,
  deleteTab,
  closeOhterTab,
  closeLeftTab,
  closeRightTab,
} = appStoreSlice.actions;

export default appStoreSlice.reducer;
