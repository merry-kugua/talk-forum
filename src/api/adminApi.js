import service from "../utils/request";
// 后台admin端页面接口信息
// 配置接口请求信息接口
// 当请求位post 时需要传递参数为data
export function loginWeb(data) {
  return service.request({
    method: "post",
    url: "/manage/login",
    data,
  });
}
