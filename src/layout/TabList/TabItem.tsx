import { memo, FC, useMemo, CSSProperties } from "react";
import { Dropdown, MenuProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteTab, closeOhterTab, closeLeftTab, closeRightTab } from "@/store/modules/appStore";
import { useDispatch } from "react-redux";
import { iTabItem } from "@/store/modules/appStore/type";

interface IProps {
  item: iTabItem;
  index: number;
  length: number;
  isShowDelete: boolean;
}
const TabItem: FC<IProps> = ({ item, isShowDelete, index, length }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onTabCli = () => {
    //这个条件成立在tab只有一项时，所以不需要切换路由
    if (!isShowDelete) return;

    navigate(item.path);
  };
  const onTabDel = e => {
    // 阻止删除事件冒泡到点击跳转事件
    e.stopPropagation();
    dispatch(deleteTab({ path: item.path, navigate: navigate }));
  };

  const isDisableCloseLeft = useMemo(() => {
    return index == 0;
  }, [index, length]);

  const isDisableCloseRight = useMemo(() => {
    return index == length - 1;
  }, [index, length]);

  const onCloseOtherTabCli = () => {
    if (!isShowDelete) return;
    dispatch(closeOhterTab(index));
    navigate(item.path);
  };

  const onCloseLeftTabCli = () => {
    if (isDisableCloseLeft) return;

    if (index === length - 1) {
      // 如果是最后一项点击关闭左侧标签页，那就相当于关闭其他标签页
      onCloseOtherTabCli();
    } else {
      dispatch(closeLeftTab(index));
    }
  };

  const onCloseRightTabCli = () => {
    if (isDisableCloseRight) return;

    if (index === 0) {
      // 如果是第一项点击关闭左侧标签页，那就相当于关闭其他标签页
      onCloseOtherTabCli();
    } else {
      dispatch(closeRightTab({ index, navigate }));
    }
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={!isShowDelete ? "font-bold" : "text-bg1 font-bold"}
          onClick={onCloseOtherTabCli}
        >
          关闭其他标签页
        </div>
      ),
      disabled: !isShowDelete,
    },
    {
      key: "2",
      label: (
        <div
          className={isDisableCloseLeft ? "font-bold" : "text-bg1 font-bold"}
          onClick={onCloseLeftTabCli}
        >
          关闭左侧标签页
        </div>
      ),
      disabled: isDisableCloseLeft,
    },
    {
      key: "3",
      label: (
        <div
          className={isDisableCloseRight ? "font-bold" : "text-bg1 font-bold"}
          onClick={onCloseRightTabCli}
        >
          关闭右侧标签页
        </div>
      ),
      disabled: isDisableCloseRight,
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items: menuItems }} trigger={["contextMenu"]} overlayClassName="bg-bg2">
        <div className="bg-bg3 px-2 py-0.5 rounded cursor-pointer ml-1" onClick={onTabCli}>
          <span className={item.isOnShow ? "text-border" : "text-text2"}>{item.label}</span>
          {isShowDelete && (
            <CloseOutlined
              className="p-0.5 hover:bg-bg2 active:bg-bg1"
              style={style.icon}
              onClick={onTabDel}
            />
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default memo(TabItem);

const style: { [key: string]: CSSProperties } = { icon: { fontSize: 12 } };
