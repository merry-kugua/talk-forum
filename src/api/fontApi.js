import service from "../utils/request";
// 前端页面端接口请求信息
// 配置接口请求信息接口
// 当请求位post 时需要传递参数为data
const url = "/web/fontweb/yublog"
export function test() {
  return service.request({
    method: "get",
    url: `${url}/homelist/barcharts`,
  });
}