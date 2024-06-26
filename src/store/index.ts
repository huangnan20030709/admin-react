import { configureStore } from "@reduxjs/toolkit";

import appStore from "./modules/appStore";

const store = configureStore({
  reducer: {
    appStore: appStore,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// 监听store的变化
store.subscribe(() => {
  // const state = store.getState() as RootState;
  // console.log(state);
});
