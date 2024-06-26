import { useState, ReactNode, useCallback, useMemo, useEffect, memo } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    icon: <MailOutlined />,
    label: "首页",
  },

  {
    key: "/1",
    icon: <MailOutlined />,
    label: "王者弹幕",
    children: [
      { key: "/1/live", label: "在线直播间" },
      { key: "/1/data", label: "数据分析" },
      { key: "/1/watch", label: "添加监控" },
      { key: "/1/fadeback", label: "用户反馈" },
    ],
  },

  {
    key: "/2",
    icon: <AppstoreOutlined />,
    label: "虚拟伴侣",
    children: [
      { key: "/2/live", label: "在线直播间" },
      { key: "/2/data", label: "数据分析" },
      { key: "/2/watch", label: "添加监控" },
      { key: "/2/fadeback", label: "用户反馈" },
      { key: "/24", label: "用户反馈" },
    ],
  },
  {
    key: "/3",
    icon: <SettingOutlined />,
    label: "你猜我画",
    children: [
      { key: "/3/live", label: "在线直播间" },
      { key: "/3/data", label: "数据分析" },
      { key: "/3/watch", label: "添加监控" },
      { key: "/3/fadeback", label: "用户反馈" },
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach(item => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

const SideBar: React.FC<{ children: ReactNode; collapsed: boolean }> = ({
  children,
  collapsed,
}) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [stateOpenKeys, setStateOpenKeys] = useState([location.slice(0, 2)]);

  const onOpenChange: MenuProps["onOpenChange"] = useCallback(
    openKeys => {
      const currentOpenKey = openKeys.find(key => stateOpenKeys.indexOf(key) === -1);
      // open

      if (currentOpenKey !== undefined) {
        const repeatIndex = openKeys
          .filter(key => key !== currentOpenKey)
          .findIndex(key => levelKeys[key] === levelKeys[currentOpenKey]);

        setStateOpenKeys(
          openKeys
            .filter((_, index) => index !== repeatIndex)
            .filter(key => levelKeys[key] <= levelKeys[currentOpenKey]),
        );
      } else {
        // close当关闭所有展开菜单

        setStateOpenKeys(openKeys);
      }
    },
    [stateOpenKeys],
  );

  const MenuStyle = useMemo(() => {
    return { width: collapsed ? "48px" : "220px" };
  }, [collapsed]);

  const onMenuItemCli = useCallback(a => {
    navigate(a.key);
  }, []);

  return (
    <div className="relative h-full">
      {children}
      <Menu
        mode="inline"
        theme="dark"
        // 选中的一级菜单
        openKeys={stateOpenKeys}
        // 选中的二级菜单
        selectedKeys={[location]}
        onOpenChange={onOpenChange}
        style={MenuStyle}
        items={items}
        inlineCollapsed={collapsed}
        onClick={onMenuItemCli}
      />
    </div>
  );
};

export default memo(SideBar);
