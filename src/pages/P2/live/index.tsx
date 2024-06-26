import { memo, FC } from "react";
interface IProps {}
const index: FC<IProps> = () => {
  return <div className="text-text1">p2/live</div>;
};
export default memo(index);
