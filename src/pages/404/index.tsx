import { memo, useCallback } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const backHomePage = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Result
      status="404"
      title="404"
      subTitle={<div className="text-text2 text-lg">您访问的页面不存在，请检查链接是否有误</div>}
      extra={
        <Button type="primary" onClick={backHomePage}>
          返回首页
        </Button>
      }
      className="mt-20"
    />
  );
};
export default memo(Page404);
