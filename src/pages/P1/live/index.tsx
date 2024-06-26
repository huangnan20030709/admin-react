import { Card, Col, Input, Row, Tabs } from "antd";
import { memo, FC, CSSProperties } from "react";
import CardItem from "./components/LiveRoom/CardItem";
const { Search } = Input;

interface IProps {}
const index: FC<IProps> = () => {
  const onSearch = () => {};

  const onChange = e => {
    console.log(e);
  };

  const tabItems = [
    {
      label: "所有",
      key: "0",
      children: (
        <div className="flex flex-wrap justify-between">
          <CardItem className="w-1/6 mt-4 ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
          <CardItem className="w-1/6 mt-4 ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
          <CardItem className="w-1/6 mt-4 ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
          <CardItem className="w-1/6 mt-4 ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
          <CardItem className="w-1/6 mt-4 ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
          <CardItem className="w-1/6 mt-4  ml-2 bg-bg1 pb-2">
            <img
              src="https://live-cover.msstatic.com/huyalive/935439202-935439202-4017680779986337792-1871001860-10057-A-0-1/20240625163615.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90"
              className="w-full"
            />

            <div className="px-2 mt-2">有车位，运营上分，包鸡</div>

            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center">
                <img
                  src="https://huyaimg.msstatic.com/avatar/1089/34/5e20190b035be690932a15984938f3_180_135.jpg?1701629344"
                  className="w-4 rounded-full"
                />
                <span className="text-text2 ml-2">玖零-酒诉</span>
              </div>
              <div>在线人数：1054人</div>
            </div>
          </CardItem>
        </div>
      ),
    },
    {
      label: "虚拟伴侣",
      key: "1",
      children: (
        <Row gutter={6} justify="start">
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
        </Row>
      ),
    },
    {
      label: "一起来摸鱼",
      key: "2",
      children: (
        <Row gutter={6} justify="start">
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
        </Row>
      ),
    },
    {
      label: "你猜我画",
      key: "3",
      children: (
        <Row gutter={6} justify="start">
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
          <Col span={6}>
            <Card></Card>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <div>
      <Card bordered={false} style={style.card} classNames={{ body: "bg-bg2" }}>
        <Row>
          <h2 className="text-xl">筛选</h2>
        </Row>

        <Row>
          <Col span={24}>
            <Tabs
              onChange={onChange}
              type="line"
              items={tabItems}
              tabBarExtraContent={{
                right: (
                  <Search
                    placeholder="用户名/房间号"
                    allowClear
                    onSearch={onSearch}
                    style={style.search}
                  />
                ),
              }}
            ></Tabs>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default memo(index);

const style: { [key: string]: CSSProperties } = {
  card: { borderRadius: "10px", border: "none" },
  search: { width: 200, color: "red" },
};
