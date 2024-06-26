import { Card } from "antd";
import { memo, FC, CSSProperties } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

interface IProps {}
const index: FC<IProps> = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 480, amt: 240 },
    { name: "Page A", uv: 120, pv: 240, amt: 154 },
    { name: "Page A", uv: 220, pv: 160, amt: 290 },
  ];
  return (
    <div>
      <Card bordered={false} style={style.card} classNames={{ body: "bg-bg2" }}>
        <h2 className="text-xl">当日数据</h2>
        <div className="flex justify-between">
          <div className="data-card-item"></div>
        </div>
        <div>
          <ResponsiveContainer height={400}>
            <ComposedChart width={600} height={300} data={data} margin={{ right: 20 }}>
              <Area type="linearClosed" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default memo(index);

const style: { [key: string]: CSSProperties } = {
  card: { borderRadius: "10px", border: "none" },
};
