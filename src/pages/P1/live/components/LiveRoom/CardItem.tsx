import { memo, FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
  className: string;
}
const CardItem: FC<IProps> = ({ children, className }) => {
  return (
    <div className={className} style={{ borderRadius: "5px", overflow: "hidden" }}>
      {children}
    </div>
  );
};
export default memo(CardItem);
