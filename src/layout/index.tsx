import { memo, FC, useCallback, useState, useMemo, Suspense, ReactNode } from "react";
import "./index.less";
import Header from "./Header";
import SideBar from "./SideBar";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Affix, Breadcrumb, Button, Spin } from "antd";
import { useDispatch } from "react-redux";
import TabList from "./TabList";
import { setExpandMenu } from "@/store/modules/appStore";
import { useSelector } from "@/store/hook";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface IProps {}

const index: FC<IProps> = () => {
  const appStore = useSelector(state => state.appStore);
  const dispatch = useDispatch();
  const location = useLocation();

  const outlet = useOutlet();

  const collapsed = useMemo(() => {
    return !appStore.expandMenu;
  }, [appStore.expandMenu]);

  const toggleCollapsed = useCallback(() => {
    dispatch(setExpandMenu(!appStore.expandMenu));
  }, [appStore.expandMenu]);

  const contentStyle = useMemo(() => {
    return { marginLeft: collapsed ? "48px" : "220px" };
  }, [collapsed]);

  const BreadcrumbArr = useMemo(() => {
    let res: { title: ReactNode }[] = [
      {
        title: (
          <Link to="/" className="text-lg">
            <HomeOutlined style={{ fontSize: 16 }} />
          </Link>
        ),
      },
    ];

    location.pathname.split("/").forEach(item => {
      if (item !== "") res.push({ title: <span className="text-text2 text-lg">{item}</span> });
    });
    return res;
  }, [location.pathname]);

  return (
    <div className="layout">
      <div className="layout-header">
        <Header></Header>
      </div>

      <div className="wrapper">
        <div className="layout-sidebar">
          <SideBar collapsed={collapsed}>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              size="small"
              className="absolute bottom-20 right-2"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </SideBar>
        </div>

        <div className="layout-content" style={contentStyle}>
          {appStore.multiTab && (
            <Affix offsetTop={61} className="ml-0.5">
              <TabList></TabList>
            </Affix>
          )}
          <div className="main">
            <Breadcrumb
              separator={<span className="text-text1 text-lg">/</span>}
              items={BreadcrumbArr}
              className="mb-2 ml-2"
            />
            {/* <TransitionGroup>
              <CSSTransition key={"123"} classNames="fade" timeout={300}>
                <Suspense
                  fallback={
                    <div className="h-full flex justify-center items-center">
                      <Spin size="large" />
                    </div>
                  }
                >
                   <Outlet></Outlet> 
                </Suspense>
              </CSSTransition>
            </TransitionGroup> */}

            <SwitchTransition mode="out-in">
              <CSSTransition
                key={location.pathname}
                appear={true}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Suspense
                  fallback={
                    <div className="h-full flex justify-center items-center">
                      <Spin size="large" />
                    </div>
                  }
                >
                  {outlet}
                </Suspense>
              </CSSTransition>
            </SwitchTransition>
            {/* 这个Suspense捕获懒加载的路由组件 */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(index);
