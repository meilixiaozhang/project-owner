var app = getApp()

Page({
  data: {
    motto: "Hello World",
    userInfo: {}
  },

  bindViewTap() {
    a.navigateTo({
      url:"../logs/logs"
    })
  },

  onLoad() {
    // 页面加载
    console.log('onLoad')
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '宝洁南部调试',
      desc: '问题责任人管理',
      path: 'pages/index/index',
    };
  },
});
