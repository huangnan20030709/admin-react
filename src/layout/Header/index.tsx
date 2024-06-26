import { memo, FC, useState, useCallback } from "react";
import { Button, Drawer, Space, Switch } from "antd";
import { MessageOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setMultiTab, setExpandMenu } from "@/store/modules/appStore";

import SearchInput from "./SearchInput";
import { useSelector } from "@/store/hook";

interface IProps {}
const index: FC<IProps> = () => {
  const appStore = useSelector(state => state.appStore);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onMultiTabChange = useCallback(e => {
    dispatch(setMultiTab(e));
  }, []);

  const onExpandMenuChange = useCallback(e => {
    dispatch(setExpandMenu(e));
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-full px-6 flex justify-between items-center">
      <Space>
        <img src="/favicon.ico" />
        <span className="text-text1 text-xl font-medium font-large">小程序管理</span>
      </Space>
      <Space size={"large"}>
        <SearchInput></SearchInput>

        <Button type="primary" shape="circle" className="bg-bg3" icon={<MessageOutlined />} />
        <Button
          type="primary"
          shape="circle"
          className="bg-bg3"
          icon={<SettingOutlined />}
          onClick={showDrawer}
        />
        <Button type="primary" shape="circle" className="bg-bg3" icon={<UserOutlined />} />
      </Space>

      <Drawer
        title="页面配置"
        classNames={{ header: "bg-bg1", body: "bg-bg1" }}
        onClose={onClose}
        open={open}
      >
        {/* <h2 className="text-xl">顶部区域</h2>
        <div>无</div>
        <h2 className="text-xl mt-4">菜单栏区域</h2>
        <div>无</div> */}

        <h2 className="text-xl mt-4">内容区域</h2>

        <div className="flex justify-between mt-2">
          <span>展开菜单栏</span>
          <Switch
            checkedChildren="已展开"
            unCheckedChildren="已折叠"
            value={appStore.expandMenu}
            onChange={onExpandMenuChange}
          />
        </div>

        <div className="flex justify-between mt-2">
          <span>多标签页</span>
          <Switch
            checkedChildren="已开启"
            unCheckedChildren="已关闭"
            value={appStore.multiTab}
            onChange={onMultiTabChange}
          />
        </div>
      </Drawer>
    </div>
  );
};
export default memo(index);
