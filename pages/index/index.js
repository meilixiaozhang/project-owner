import { rawOwnersData } from './owner'; // 导入城市数据

Page({
  data: {
    selectValue: '', // 选择的值
    selectShow: false, // 是否显示级联组件
    rawOwnersData: rawOwnersData // mock的级联数据
  },
  /**
   * 点击输入框显示级联组件
   * @method openSelect
   */
  openSelect() {
    this.setData({ selectShow: true });
  },
  /**
   * 关闭级联组件
   * @method closeSelect
   */
  closeSelect() {
    this.setData({ selectShow: false });
  },
  /**
   * 点击确认触发的事件
   * @method onSelectSuccess
   * @param {*} result
   */
  onSelectSuccess(result) {
    let selectValue = '';
    result && result.map((item) => {
      selectValue += item.name + ' ';
    });
    if (selectValue.length > 0) {
      selectValue = selectValue.substr(0, selectValue.length - 1);
    }
    this.setData({ selectValue });
  }
});
