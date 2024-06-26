import { memo, FC, useState, useCallback } from "react";
import { Input } from "antd";

interface IProps {}
const index: FC<IProps> = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <Input placeholder="input search text" allowClear value={value} onChange={onChange} />
    </div>
  );
};

export default memo(index);
