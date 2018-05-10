export default{
  install (Vue, options) {
    // 数组去重
    Vue.prototype.unique = function (arr) {
      let result = []
      arr.forEach(function (v) {
        if (result.indexOf(v) < 0) {
          result.push(v)
        }
      })
      return result
    }
  }
}
