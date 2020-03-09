import principal from '../../utils/owner';
var animation

Page({

  /**
   * 页面的初始数据
   * 当前    stages:所有阶段
   * categories选择阶段对应的所有类目,
   * owners选择类目对应的负责人
   * stage：当前被选中的阶段
   * category当前被选中的类目
   * owner当前被选中的负责人
   */
  data: {
    menuType: 0,
    begin: null,
    status: 1,
    end: null,
    isVisible: false,
    animationData: {},
    animationprincipalMenu: {},
    principalMenuIsShow: false,
    value: [0, 0, 0],
    stages: [],
    categories: [],
    owners: [],
    stage: '',
    category: '',
    owner: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化动画变量
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation;
    // 默认联动显示北京
    var id = principal.stages[0].id
    this.setData({
      stages: principal.stages,
      categories: principal.categories[id],
      owners: principal.owners[principal.categories[id][0].id],
    })
    console.log(this.data)
  },
  // 显示
  showMenuTap: function (e) {
    console.log('selectState')
    //获取点击菜单的类型 1点击状态 2点击时间 
    var menuType = e.currentTarget.dataset.type
    // 如果当前已经显示，再次点击时隐藏
    if (this.data.isVisible == true) {
      this.startAnimation(false, -200)
      return
    }
    this.setData({
      menuType: menuType
    })
    this.startAnimation(true, 0)
  },
  hideMenuTap: function (e) {
    this.startAnimation(false, -200)
  },
  // 执行动画
  startAnimation: function (isShow, offset) {
    var that = this
    var offsetTem
    if (offset == 0) {
      offsetTem = offset
    } else {
      offsetTem = offset + 'rpx'
    }
    this.animation.translateY(offset).step()
    this.setData({
      animationData: this.animation.export(),
      isVisible: isShow
    })
    console.log(that.data)
  },
  // 选择状态按钮
  selectState: function (e) {
    console.log('selectState1')
    this.startAnimation(false, -200)
    var status = e.currentTarget.dataset.status
    this.setData({
      status: status
    })
    console.log(this.data)

  },
  // 日志选择
  bindDateChange: function (e) {
    console.log(e)
    if (e.currentTarget.dataset.type == 1) {
      this.setData({
        begin: e.detail.value
      })
    } else if (e.currentTarget.dataset.type == 2) {
      this.setData({
        end: e.detail.value
      })
    }
  },
  sureDateTap: function () {
    this.data.pageNo = 1
    this.startAnimation(false, -200)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShownerppMessage: function () {

  },
  // 点击所在地区弹出选择框
  selectDistrict: function (e) {
    var that = this
    console.log('111111111')
    if (that.data.principalMenuIsShow) {
      return
    }
    that.startprincipalAnimation(true)
  },
  // 执行动画
  startprincipalAnimation: function (isShow) {
    console.log(isShow)
    var that = this
    if (isShow) {
      that.animation.translateY(0 + 'vh').step()
    } else {
      that.animation.translateY(40 + 'vh').step()
    }
    that.setData({
      animationprincipalMenu: that.animation.export(),
      principalMenuIsShow: isShow,
    })
  },
  // 点击地区选择取消按钮
  categoryCancel: function (e) {
    this.startprincipalAnimation(false)
  },
  // 点击地区选择确定按钮
  categoriesure: function (e) {
    var that = this
    var category = that.data.category
    var value = that.data.value
    that.startprincipalAnimation(false)
    // 将选择的城市信息显示到输入框
    var ownerInfo = that.data.stages[value[0]].name + ',' + that.data.categories[value[1]].name + ',' + that.data.owners[value[2]].name
    that.setData({
      ownerInfo: ownerInfo,
    })
  },
  hidecategorieselected: function (e) {
    console.log(e)
    this.startprincipalAnimation(false)
  },
  // 处理省市县联动逻辑
  categoryChange: function (e) {
    console.log(e)
    var value = e.detail.value
    var stages = this.data.stages
    var categories = this.data.categories
    var owners = this.data.owners
    var stageNum = value[0]
    var categoryNum = value[1]
    var countyNum = value[2]
    if (this.data.value[0] != stageNum) {
      var id = stages[stageNum].id
      this.setData({
        value: [stageNum, 0, 0],
        categories: principal.categories[id],
        owners: principal.owners[principal.categories[id][0].id],
      })
    } else if (this.data.value[1] != categoryNum) {
      var id = categories[categoryNum].id
      this.setData({
        value: [stageNum, categoryNum, 0],
        owners: principal.owners[categories[categoryNum].id],
      })
    } else {
      this.setData({
        value: [stageNum, categoryNum, countyNum]
      })
    }
    console.log(this.data)
  },

})

