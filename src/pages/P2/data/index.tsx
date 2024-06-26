import { memo, FC } from "react";
interface IProps {}
const index: FC<IProps> = () => {
  return <div className="text-text1">p2/data</div>;
};
export default memo(index);
