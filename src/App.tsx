import { memo, FC, Suspense, CSSProperties } from "react";
import { RouterProvider } from "react-router-dom";
import { Spin, ConfigProvider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "reset.css";
import "./config/global.css";

import router from "./router/index";

import { Provider } from "react-redux";
import store from "./store";

import { AntDesignThemeObj } from "./config/theme";
import ErrorBoundary from "./components/ErrorBoundary";

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <ErrorBoundary fallback={<h1>出错啦</h1>}>
      <Suspense fallback={<Spin indicator={<LoadingOutlined style={style.loading} spin />} />}>
        <ConfigProvider theme={AntDesignThemeObj}>
          <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
          </Provider>
        </ConfigProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default memo(App);

const style: { [key: string]: CSSProperties } = {
  loading: { fontSize: 48 },
};
