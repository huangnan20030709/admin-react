import { memo, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import TabItem from "./TabItem";
import { useLocation } from "react-router-dom";
import { navigateEffectTab } from "@/store/modules/appStore";
import { useSelector } from "@/store/hook";
interface IProps {}

const location2Label = (pathName: any) => {
  let map = {
    "/": "首页",
    //
    "/1/live": "项目一/在线直播间",
    "/1/data": "项目一/数据分析",
    //
    "/2/live": "项目二/在线直播间",
  };
  return map[pathName] || "请修改location2Label方法的映射表";
};
const TabList: FC<IProps> = () => {
  const appStore = useSelector(state => state.appStore);
  const dispatch = useDispatch();
  const loaction = useLocation();

  useEffect(() => {
    dispatch(
      navigateEffectTab({
        path: location.pathname,
        label: location2Label(location.pathname),
        isOnShow: true,
      }),
    );
  }, [loaction]);

  return (
    <div className="bg-bg1 h-8 flex items-center pl-4">
      {appStore.tabList.map((item, index) => {
        return (
          <TabItem
            item={item}
            index={index}
            length={appStore.tabList.length}
            isShowDelete={appStore.tabList.length > 1}
            key={item.path}
          ></TabItem>
        );
      })}
    </div>
  );
};
export default memo(TabList);
