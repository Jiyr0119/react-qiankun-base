import { MicroApp } from 'umi';

export function MyPage() {
  return (
    <div>
      <MicroApp
        name="app1"
        autoSetLoading
        // 设置自定义 loading 动画
        loader={(loading) => <div>loading: {loading}</div>}
        // 微应用容器 class
        className="myContainer"
        // wrapper class，仅开启 loading 动画时生效
        wrapperClassName="myWrapper"
      />
    </div>
  );
}
